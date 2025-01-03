import Bookings from '../models/Bookings.js';

const createBooking=async(req,res)=>{
    const{name, email, phone, date, time, details}=req.body;
    if(!name || !phone || !date || !time){
        return res.status(400).send("Fill all the required fields");
    }

    const bookingExists= await Bookings.findOne({date: date , time:time})
    if(bookingExists){
        // console.log("This time slot is already booked");
        return res.status(400).send("This time slot is already booked");
    }

    try {
        const newBooking = new Bookings(req.body);
        const savedBooking = await newBooking.save();
        res.json(savedBooking);

    } catch (error) {
        req.status(500).json({error: error.message});
    }
}

export default createBooking;