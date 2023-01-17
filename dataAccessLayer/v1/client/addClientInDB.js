const { Client } = require("../../../models/Client");

module.exports.addClientInDB = async({
    client
}) => {
    return new Promise( async(resolve, reject) => {
        // call the Data access layer Here
        try{    
            const newClientAdded = await new Client(client).save();
            return resolve(newClientAdded)
        }catch(e){
            console.log('e :>> ', e);
            let errMsg;
            if (e.code == 11000) {
              errMsg = Object.keys(e.keyValue)[0] + " already exists.";
            } else {
              errMsg = e.message;
            }
            if(errMsg){
                return reject({
                    reason: errMsg,
                    
                })
            }
            return reject(e)
        }
    })
}