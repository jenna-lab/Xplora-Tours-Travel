import { TourSchema as TourValidator } from "./../helpers/userValidator";
import { request, Request, Response } from "express";
import mssql, { pool } from "mssql";
import { sqlConfig } from "../config/Config";
import { v4 as uuid } from "uuid";

import {
  UserSchema,
  UserSchema2,
  TourSchema,
  UserSchema4,
  UserSchema5,
  UserSchema6,
} from "../helpers/userValidator";

import dotenv from "dotenv";
dotenv.config();

import { Tour } from "../interfaces/interface";

export const addNewTour = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const tourId = uuid();
    const {
      title,
      description,
      destination,
      price,
      imageUrl,
      start_date,
      end_date,

    } = req.body;
console.log(req.body);

    const { error } = TourSchema.validate(req.body);
    if (error) {
      console.log(error);
      
      return res.json({ error: error.details[0].message });
    }

    await pool
      .request()
      .input("tour_id", mssql.VarChar, tourId)
      .input("title", mssql.VarChar, title)
      .input("description", mssql.VarChar, description)
      .input("destination", mssql.VarChar, destination)
      .input("price", mssql.Int, price)
      .input("imageUrl", mssql.VarChar, imageUrl)
      .input("start_date", mssql.VarChar, start_date)
      .input("end_date", mssql.VarChar, end_date)
    
      .execute("inserttour");

    res.json({ message: "Added new Tour..." });
  } catch (error) {
    console.log(error);
    
    res.json({ error });
  }
};



export const getAllTours = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const alltours: Tour[] = await (
      await pool.request().execute("getalltours")
    ).recordset;
    console.log(alltours);

    res.json(alltours);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTour = async (req: Request, res: Response) => {
  try {
    const { tour_id } = req.params;
    console.log(req.params);
    

    const pool = await mssql.connect(sqlConfig);

    await pool
      .request()
      .input("tour_id", mssql.VarChar, tour_id)
      .execute("deleteTour");

    res.json({ message: "Tour deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateTour = async (req: Request, res: Response) => {
  try {
    const { tour_id } = req.params;
    const {
      title,
      description,
      destination,
      price,
      imageUrl,
      start_date,
      end_date,
    } = req.body;
    console.log(req.body);
    

    const pool = await mssql.connect(sqlConfig);

    await pool
      .request()
      .input("tour_id", tour_id)
      .input("title", title)
      .input("description", description)
      .input("destination", destination)
      .input("price", price)
      .input("imageUrl", imageUrl)
      .input("start_date", start_date)
      .input("end_date", end_date)
      .execute("updateTour");

    res.json({ message: "Tour updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



