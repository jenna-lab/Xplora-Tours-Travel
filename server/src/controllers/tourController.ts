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
    } = req.body;

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
      .execute("inserttour");

    res.json({ message: "Added new Tour..." });
  } catch (error) {
    console.log(error);
    
    res.json({ error });
  }
};

// export const assignNewTour = async (req: Request, res: Response) => {
//   try {
//     const pool = await mssql.connect(sqlConfig);
//     const { name, description, end_date, assigned_user_email } = req.body;
//     const { error, value } = UserSchema3.validate(req.body);
//     if (error) {
//       return res.json({ error: error.details[0].message });
//     }

//     await pool
//       .request()
//       .input("name", mssql.VarChar, name)
//       .input("description", mssql.VarChar, description)
//       .input("end_date", mssql.VarChar, end_date)
//       .input("assigned_user_email", mssql.VarChar, assigned_user_email)
//       .execute("assignNewTour");

//     res.json({ message: "Assigned new tour..." });
//   } catch (error) {
//     res.json({ error });
//   }
// };

// export const deleteTour = async (req: Request, res: Response) => {
//   try {
//     const pool = await mssql.connect(sqlConfig);
//     const tour_id = req.params.tour_id;

//     const deleteTour: tour[] = await (
//       await pool
//         .request()
//         .input("tour_id", mssql.VarChar, tour_id)
//         .execute("deleteTour")
//     ).recordset;

//     res.json({ message: "Deleted tour..." });
//   } catch (error) {
//     res.json({ error });
//   }
// };

// export const getallTours = async (req: Request, res: Response) => {
//   try {
//     const pool = await mssql.connect(sqlConfig);
//     const allprojects: Tours[] = await (
//       await pool.request().execute("getalltours")
//     ).recordset;
//     console.log(alltours);

//     res.json(alltours);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getTour = async (req: Request, res: Response) => {
//   try {
//     const pool = await mssql.connect(sqlConfig);
//     const assigned_user_email = req.params.email;

//     const getTour: Tour[] = await (
//       await pool
//         .request()
//         .input("assigned_user_email", mssql.VarChar, assigned_user_email)
//         .execute("getTour")
//     ).recordset;

//     return res.json(getTour);
//   } catch (error) {
//     res.json({ error });
//   }
// };

// export const completeTours = async (req: Request, res: Response) => {
//   try {
//     const pool = await mssql.connect(sqlConfig);
//     const tour_id = req.params.tour_id;

//     const ctour: Tour[] = await (
//       await pool
//         .request()
//         .input("tour_id", mssql.VarChar, tour_id)
//         .execute("completeTour")
//     ).recordset;

//     res.json(ctour);
//   } catch (error) {
//     res.json({ error });
//   }
// };
