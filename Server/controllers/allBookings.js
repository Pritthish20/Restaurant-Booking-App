import Bookings from "../models/Bookings.js";

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Bookings.find();
    return res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export default getAllBookings;
