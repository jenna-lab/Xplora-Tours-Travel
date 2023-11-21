import { Router } from "express";
import {
  createBooking,
  deleteBooking,
  getBooking,
  getBookings,
  getUserBooking,
  updateBooking,
} from "../controllers/bookingController";
import { VerifyToken } from "../MiddleWare/verifytoken";

const booking_router = Router();

booking_router.get("/", getBookings);
booking_router.post("/newbooking", createBooking);
booking_router.put("/", updateBooking);
booking_router.get("/user/:user_id", getUserBooking);
booking_router.get("/:booking_id", getBooking);
booking_router.delete("/:booking_id", deleteBooking);



export default booking_router;
