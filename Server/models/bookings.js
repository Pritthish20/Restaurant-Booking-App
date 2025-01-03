import mongoose from "mongoose";

const bookingSchema=mongoose.Schema({
    name:{type: String , required: true},
    email:{type: String },
    phone:{type: String , required: true},
    date:{type: Date , required: true , default:Date.now},
    time:{type: String , required: true},
    guests:{type: Number , required: true},
    details:{type: String }
},{Timestamps:true});

const Bookings=mongoose.model("Bookings",bookingSchema);
export default Bookings;