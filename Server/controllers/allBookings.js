import Bookings from "../models/Bookings.js";

const getAllBookings=async (req, res) =>{
    try {
        const bookings = await Bookings.find();
        res.json(bookings);
    } catch (error) {
        req.status(500).json({error:error.message});
    }
}

export default getAllBookings;