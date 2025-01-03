import Bookings from "../models/Bookings.js";

const deleteBooking= async (req, res) => {
    try {
        const {id}=req.params;
        const deleteBookingRequest=await Bookings.findByIdAndDelete(id);

        if(!deleteBookingRequest) {
            return res.status(404).json({message: 'Booking not found'});
        }

        res.json({message: 'Booking deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export default deleteBooking;