const { updateClientInDB } = require("../../../dataAccessLayer/v1/client/updateClientInDB");

module.exports.updateClientService = async(
{  id,
  name,
  email,
  phoneNumber,
  totalBill,}
) => new Promise(async (resolve, reject) => {
  try {
    const updatedClient = await updateClientInDB({
      id,
      name,
      email,
      phoneNumber,
      totalBill,
    });
    return resolve(updatedClient);
  } catch (e) {
    console.log('e :>> ', e);
    return reject(e);
  }
})