import exp from "constants"
import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
  {
      content:{
        type: String,
        reqired: true, 
      },
      complete:{
        type:String,
        default: false
      },
      createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      subTode: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref:"SubTodo"
        }
        // Array of SubTodes
      ]
  },
  
  {timestamps:true}
)

export const Todo = mongoose.model("Todo", todoSchema)