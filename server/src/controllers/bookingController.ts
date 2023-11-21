import { Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../config/Config";
import { v4 as uuid } from "uuid";

import {
  validateBooking,
  validateUpdateBooking,
  validateBookingId,
  validateUserId,
} from "../helpers/userValidator";

export const createBooking = async (req: Request, res: Response) => {
  try {    
    const pool = await mssql.connect(sqlConfig);
    const booking_id = uuid();
     const { tour_id, user_id, count, total_price } = req.body;

    const { error } = validateBooking.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    await pool
      .request()
      .input("booking_id", mssql.VarChar, booking_id)
      .input("tour_id", mssql.VarChar, tour_id)
      .input("user_id", mssql.VarChar, user_id)
      .input("count", mssql.Int, count)
      .input("total_price", mssql.Decimal(10,2), total_price)
      
      .execute("createBooking");

    res.json({ message: "Booking created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);

    const bookings = await (
      await pool.request().execute("getBookings")
    ).recordset;

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateBooking = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);

    // Validate request body
    const { error } = validateUpdateBooking.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Extract data from request body
    const {
      booking_id,
      tour_id,
      user_id,
    } = req.body;

    // Perform the booking update in the database
    await pool
      .request()
      .input("booking_id", mssql.VarChar, booking_id)
      .input("tour_id", mssql.VarChar, tour_id)
      .input("user_id", mssql.VarChar, user_id)
      .execute("updateBooking");

    res.json({ message: "Booking updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBooking = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);

    // Validate request parameters
    const { error } = validateBookingId.validate(req.params);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Extract booking_id from request parameters
    const { booking_id } = req.params;

    // Perform fetching a single booking from the database
    const booking = await (
      await pool
        .request()
        .input("booking_id", mssql.VarChar, booking_id)
        .execute("getBooking")
    ).recordset;

    if (!booking || booking.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json(booking[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserBooking = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);


    const { error } = validateUserId.validate(req.params);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { user_id } = req.params;

    const booking = (
      await pool
        .request()
        .input("user_id", mssql.VarChar, user_id)
        .execute("getUserBookings")
    ).recordset;

    if (!booking || booking.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);

    const { error } = validateBookingId.validate(req.params);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { booking_id } = req.params;

    await pool
      .request()
      .input("booking_id", mssql.VarChar, booking_id)
      .execute("deleteBooking");

    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

