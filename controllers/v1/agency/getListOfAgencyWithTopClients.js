const { outputMessages } = require("../../../outputMessages");
const {
  addClientAndAgencyService,
  getListOfAgencyWithTopClientsService,
} = require("../../../service/v1/agency");
const {
  success200,
  unprocessable422,
  serverError500,
} = require("../../../outputResponseTemplates");
module.exports.getListOfAgencyWithTopClients = async (req, res) => {
  try {
    const listOfTopClients = await getListOfAgencyWithTopClientsService();
    return success200(res, {
      message: outputMessages?.successFullyRetrievedTopClientsOfAgency,
      data: listOfTopClients,
    });
  } catch (e) {
    return serverError500(res, {
      message: outputMessages?.server_err ?? e,
    });
  }
};
