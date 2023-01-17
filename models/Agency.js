const mongoose = require("mongoose");
const { Schema } = mongoose;
const AgencySchema = new Schema({
    name: { type: String, required: true, trim: true },
    address1: { type: String, required: true, trim: true },
    address2: { type: String, trim: true },
    state: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    phoneNumber: { 
        type: String, 
        required: true, 
    //   unique: true, // as per the requirement
        trim: true, 
        // validate: {
        //     validator: function(v) {
        //         return /\d{3}-\d{3}-\d{4}/.test(v);
        //     },
        //     message: '{VALUE} is not a valid phone number!'
        // }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
// AgencySchema.index({ name: 1, city: 1}, { unique: true }); // indexing is added for later on fast read.
const Agency = mongoose.model('Agency', AgencySchema);
module.exports = {Agency};