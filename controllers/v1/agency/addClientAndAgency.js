const { outputMessages } = require("../../../outputMessages");
const { addClientAndAgencyService } = require("../../../service/v1/agency");
const {
  success200,
  unprocessable422,
  serverError500,
  badRequest400,
} = require("../../../outputResponseTemplates");

module.exports.addClientAndAgency = async (req, res) => {
  const { agency = {}, client = {} } = req.body;
  // validation added

  if (
    !agency.name ||
    !agency.address1 ||
    !agency.state ||
    !agency.city ||
    !agency.phoneNumber ||
    !client.name ||
    !client.email ||
    !client.phoneNumber ||
    !client.totalBill
  ) {
    return unprocessable422(res, { message: outputMessages?.mandatory_field });
  }
  try {
    const { addedAgency, addedClient } = await addClientAndAgencyService({
      agency,
      client,
    });
    return success200(res, {
      message: outputMessages?.successFullyAddedClientAndAgency,
      // data: { },
    });
  } catch(err) {
    if(err?.reason){
        return badRequest400(res, {
            message : err?.reason ?? outputMessages?.badRequest400
        })
    }
    return serverError500(res, {
      message: (err.name === 'MongoError' && err.code === 11000) ?  Object.keys(err.keyValue) +" already exists." :  outputMessages?.server_err ?? e,
    });
  }
};
