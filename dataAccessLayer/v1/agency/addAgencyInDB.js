const { Agency } = require("../../../models/Agency");

module.exports.addAgencyInDB = async({
    agency
}) => {
    return new Promise( async(resolve, reject) => {
        // call the Data access layer Here
        try{    
            const newAgency = await new Agency(agency).save();
            console.log('newAgency :>> ', newAgency);
            return resolve(newAgency)
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

