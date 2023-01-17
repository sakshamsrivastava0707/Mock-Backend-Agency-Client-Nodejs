const { Client } = require("../../../models/Client");
let {ObjectId} = require('mongodb');
// console.log('ObjectId :>> ', ObjectId("fdfs"));
module.exports.updateClientInDB = async ({
  id,
  name,
  email,
  phoneNumber,
  totalBill,
}) => {
  // ObjectId(id)
  return new Promise(async (resolve, reject) => {
    // call the Data access layer Here
    try {
      console.log('id objectid:>> ', id);
      const updatedClient = await Client.findOneAndUpdate({_id : id}, {
        name,
        email,
        phoneNumber,
        totalBill,
      });
      console.log('updatedClient :>> ', updatedClient);
      if(!updatedClient){
        reject({reason : "User not Found"})
      }
      return resolve(updatedClient);
    } catch (e) {
      console.log("e :>> ", e);
      return reject(e);
    }
  });
};
