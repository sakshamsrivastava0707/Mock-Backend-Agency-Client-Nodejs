const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require('validator');

const ClientSchema = new Schema({
  agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },
  name: { type: String, required: true, trim: true },
  email: { 
      type: String, 
      required: true, 
      trim: true, 
      lowercase: true,
      unique: true,
      validate: {
          validator: function(v) {
              return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
          },
          message: '{VALUE} is not a valid email address!'
      }
  },
  phoneNumber: { 
      type: String, 
      required: true, 
    //   unique: true, // as per the requirement
      trim: true, 
       match: /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
    //   validate: {
    //       validator: function(v) {
    //           return /\d{3}-\d{3}-\d{4}/.test(v);
    //       },
    //       message: '{VALUE} is not a valid phone number!'
    //   }
  },
  totalBill: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
// ClientSchema.index({ email: 1, phoneNumber: 1}, { unique: true }); // maybe we can optimize this later
const Client = mongoose.model('Client', ClientSchema);
module.exports = {Client};
