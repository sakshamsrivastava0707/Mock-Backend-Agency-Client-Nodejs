const mongoose = require("mongoose");

// module.exports = new Promise(async (resolve, reject) => {
//   try {
  
// await mongoose.connect("mongodb+srv://sak:ZODHuEaFLH24AEqi@cluster0.vbffy8e.mongodb.net/test")
//     resolve({  });
//   } catch (error) {
//     console.log("error :>> ", error);
//     reject(error);
//   }
// });

const MONGO_URI ="mongodb+srv://sak:ZODHuEaFLH24AEqi@cluster0.vbffy8e.mongodb.net/test"

mongoose
    .connect( MONGO_URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
        // 'strictQuery':  false
        // useCreateIndex:true,
    })
    .then(()=> console.log('MongoDB connected....'))
    .catch((err) => console.log(err));
const db =mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to Mongodb'));

db.once('open',function(){
    console.log('Connected to Database:: Mongodb');
});
module.exports = db
