import mongoose  from "mongoose"

const categotySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
},{timestamps:true})

export const Category = mongoose.Model("Category", categotySchema)