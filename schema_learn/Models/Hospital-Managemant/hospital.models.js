import mongoose from 'mongoose';

const hospitalSchema= new mongoose.Schema(
  {
    name:{
      typr:String,
      required:true,
    },
    addressLine1:{
      type:String,
      requried:true,
    },
    addressLine2:{
      type:String,
    },
    city:{
      type:String,
      required:true,
    },
    pincode:{
      type:String,
      required:true,

    },
    spacilizedIn:[
      {
        type:String
      },
    ],
  }, {timestamps:true}
  
)

export const Hospital = mongoose.model("Hospital", hospitalSchema)