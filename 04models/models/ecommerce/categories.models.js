import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    createdBy:{
        type: mongoose.Schema.Types.OBjectId,
        ref:"Products"
    }

},{timestamps:true})

export const Category = mongoose.model("Category",categorySchema)