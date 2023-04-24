const mongoose = require("mongoose");
const { Schema } = mongoose;
const ErrorCodesModelSchema=new Schema({
    ErrorStatuscode: {
        type: Number,unique: true,
      },
    message: {
    type: String,unique: true,
    },
},{
    timestamps:true,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret){
        ret.id = ret._id,
        delete ret.Date
        delete ret._id
      }
    }

})
module.exports = mongoose.model("ServerResponseCodes", ErrorCodesModelSchema);