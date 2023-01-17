const { addAgencyInDB } = require("../../../dataAccessLayer/v1/agency");
const { addClientInDB } = require("../../../dataAccessLayer/v1/client/addClientInDB");

module.exports.addClientAndAgencyService = async ({ agency, client }) => {

    return new Promise( async( resolve, reject) => {
        try{
            const addedAgency = await addAgencyInDB({
                agency
            })
            const { _id } = addedAgency;
            // making the connection btw agency and client
            client.agencyId = _id;
            const addedClient = await addClientInDB({
                client
            })
           return resolve({
                addedAgency,
                addedClient
            })
        }catch(e){
            console.log('e :>> ', e);
            reject(e)
        }

    })
};
