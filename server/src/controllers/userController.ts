import {Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../config/Config";
import { v4 as uid } from "uuid";
import bcrypt from "bcrypt";
import { UserSchema, UserSchema2 } from "../helpers/userValidator";
import { User } from "../interfaces/interface";
import jwt from "jsonwebtoken";
import connnection  from "../dbhelper/dbhelper";


const dbhelper = new connnection();
import dotenv from "dotenv";
dotenv.config();

import { Data } from "../interfaces/interface";

interface Extended extends Request {
  info?: Data;
}

interface ExtendedRequest extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
}
export const registerUser = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const pool = await mssql.connect(sqlConfig);
    const id = uid();
    const { name, email, password } = req.body;
    const { error, value } = UserSchema.validate(req.body);
    if (error) {
      console.log(error);
      return res.json({ error: error.details[0].message });
    }
    const hashedPwd = await bcrypt.hash(password, 10);
          let result = dbhelper.execute("insertUser", {
            id,
            name,
            email,
            password: hashedPwd,
          });

          console.log(result);
 
    // await pool
    //   .request()
    //   .input("id", mssql.VarChar, id)
    //   .input("name", mssql.VarChar, name)
    //   .input("email", mssql.VarChar, email)
    //   .input("password", mssql.VarChar, hashedpassword)
    //   .execute("insertUser");

    res.json({ message: "Registered new user..." });
  } catch (error) {
    console.log(error);
    
    res.json({ error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    
    const pool = await mssql.connect(sqlConfig);
    const { error, value } = UserSchema2.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }
    if (value) {
      console.log(value);
      
      
    }
    const user: User[] = await (
      await pool
        .request()
        .input("email", mssql.VarChar, email)
        .execute("getUser")
    ).recordset;

    if (!user) {
      return res.json({ message: "User Not Found" });
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.json({ message: "Invalid password" });
    }
    const payload = user.map((item) => {
      const { password, ...rest } = item;
      return rest;
    });
    const token = jwt.sign(payload[0], process.env.SECRET as string, {
      expiresIn: "3600s",
    });
    res.json({
      message: "Logged in",
      token,
    });
  } catch (error) {
    console.log(error);
    
    res.json(error);
  }
};



export const checkUser = async (req: Extended, res: Response) => {
  console.log("HERE =>");

  if (req.info) {
    console.log(req.info);

    res.json({
      name: req.info.name,
      role: req.info.role,
      email: req.info.email,
    });
  }
};
export const getallusers = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const allusers = await (
      await pool.request().execute("getProjectUsers")
    ).recordset;
    console.log(allusers);
    res.json(allusers);
  } catch (error) {
    console.log(error);
  }
};
