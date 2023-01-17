const { Client } = require("../../../models/Client");

module.exports.getListOfAgencyWithTopClientsFromDB = async() => {
    return new Promise( async(resolve, reject) => {
        // call the Data access layer Here
        try{
          const  topClients = await Client.aggregate([
                {
                  $group: {
                    _id: "$agencyId",
                    maxBill: { $max: "$totalBill" },
                    topClients: {
                      $push: {
                        name: "$name",
                        totalBill: "$totalBill"
                      }
                    }
                  }
                },
                {
                  $lookup: {
                    from: "agencies",
                    localField: "_id",
                    foreignField: "_id",
                    as: "agency"
                  }
                },
                {
                  $unwind: "$agency"
                },
                {
                  $project: {
                    agencyName: "$agency.name",
                    topClients: {
                      $filter: {
                        input: "$topClients",
                        as: "client",
                        cond: {
                          $eq: [ "$$client.totalBill", "$maxBill" ]
                        }
                      }
                    }
                  }
                },
                {
                  $sort: { "topClients.totalBill": -1 }
                },
                // you can you use pagination later on to decrease the load if there are many
                // {
                //   $limit: 10
                // }
              ]);
              console.log('topClients :>> ', topClients);

            return resolve(topClients)
        }catch(e){
            console.log('e :>> ', e);
            return reject(e)
        }
    })
}

