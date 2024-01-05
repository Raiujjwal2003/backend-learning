import mongoose  from "mongoose"

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:true
    },
    image:{
        type:String
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        default:0,
        type:Number,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }

},{timestamps:true})

export const Product = mongoose.Model("Product", productSchema)