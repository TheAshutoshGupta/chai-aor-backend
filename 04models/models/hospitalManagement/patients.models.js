import mongoose from 'mongoose'

const AddressArray = new mongoose.Schema({
    houseNo:{
        type:Number,
        required:true,
    },
    Street:{
        type:String,
        required:true,
    },
    State:{
        type:String,
        required:true,
    },
    Pincode:{
        type:Number,
        required:true,
        maxlength: 6,
    }
})

const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    diagonsedWith:{
        type:String,
        required:true,
    },
    address:{
        type:[AddressArray],
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","0"]
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospitals"

    }

},{timestamps:true})

export const Patients = mongoose.model("Patients",patientSchema)