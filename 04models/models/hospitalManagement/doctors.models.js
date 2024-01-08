import mongoose from 'mongoose'

const doctorsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    worksInHospitals:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospitals"
    }

},{timestamps:true})

export const Doctors = mongoose.model("Doctors",doctorsSchema)