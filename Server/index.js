import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"

//files
import createBooking from "./controllers/createBooking.js";
import deleteBooking from "./controllers/deleteBooking.js";
import allBookings from "./controllers/allBookings.js";

//config

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Server is up to index!!!");
});

//middleware
app.use(cors({
  methods: ["GET", "POST", "DELETE"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes

app.post("/api/vv/create",createBooking);
app.delete("/api/vv/delete/:id",deleteBooking);
app.get("/api/vv/all",allBookings);


//db

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.error(`Error connecting to DB: ${err.message}`);
      throw err;
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection error", err);
  });
