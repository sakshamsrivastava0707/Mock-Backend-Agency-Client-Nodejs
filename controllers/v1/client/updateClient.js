const { outputMessages } = require("../../../outputMessages");
const { updateClientService } = require("../../../service/v1/client/updateClientService");
const {
  success200,
  unprocessable422,
  serverError500,
  notFound404,
} = require("../../../outputResponseTemplates");
module.exports.updateClient = async( req, res) => {
  console.log(req.params)
  const { id } = req.params;
  // console.log(clientId)
  
  const { name, email, phoneNumber, totalBill } = req.body;


  // validation added 
  if (!name || !email || !phoneNumber || !totalBill || !id) {
    return unprocessable422(res, { message: outputMessages?.mandatory_field });
  }
    try{
    const updatedClient =  await updateClientService({
      id,
      name,
      email,
      phoneNumber,
      totalBill,
     });
     return success200(res, {
      message: outputMessages?.successFullyUpdatedClient,
      // data: { },
    });
    }catch(e){
      if(e?.reason){
       return notFound404(res, {
          message : e?.reason ?? outputMessages?.error404
        })
      }
      return serverError500(res, {
        message : outputMessages?.server_err
      })
    }
}