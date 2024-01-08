import mongoose from 'mongoose'


const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    qunatity:{
        type:Number,
        requried:true,
    }
})

const AddressArray=new mongoose.Schema({
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

const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number, 
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:[AddressArray],
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING",
    }
},{timestamps:true})

export const Orders = mongoose.model("Orders", orderSchema)