const { getListOfAgencyWithTopClientsFromDB } = require("../../../dataAccessLayer/v1/agency")

module.exports.getListOfAgencyWithTopClientsService = async() => {
    return new Promise( async(resolve, reject) => {
        // call the Data access layer Here
        try{
          let  listOfTopClients = await getListOfAgencyWithTopClientsFromDB();
          return resolve(listOfTopClients);
        }catch(e){
          console.log('e :>> ', e);
          reject(e)
        }
    })
}