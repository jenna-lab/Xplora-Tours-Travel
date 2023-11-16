import { request, Request, Response } from "express";
import mssql, { pool } from "mssql";
import { sqlConfig } from "../config/Config";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

import {
  UserSchema,
  UserSchema2,
  UserSchema3,
  UserSchema4,
  UserSchema5,
  UserSchema6,
} from "../helpers/userValidator";
import dotenv from "dotenv";
dotenv.config();

import { Project } from "../interfaces/interface";


export const addNewProject = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const project_id = uuid();
    const { name, description, end_date, assigned_user_email } = req.body;
    const { error, value } = UserSchema3.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }

    await pool
      .request()
      .input("project_id", mssql.VarChar, project_id)
      .input("name", mssql.VarChar, name)
      .input("description", mssql.VarChar, description)
      .input("end_date", mssql.VarChar, end_date)
      .input("assigned_user_email", mssql.VarChar, assigned_user_email)
      .execute("insertProject");

    res.json({ message: "Added new Project..." });
  } catch (error) {
    res.json({ error });
  }
};

export const assignNewProject = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const { name, description, end_date, assigned_user_email } = req.body;
    const { error, value } = UserSchema3.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }

    await pool
      .request()
      .input("name", mssql.VarChar, name)
      .input("description", mssql.VarChar, description)
      .input("end_date", mssql.VarChar, end_date)
      .input("assigned_user_email", mssql.VarChar, assigned_user_email)
      .execute("assignNewProject");

    res.json({ message: "Assigned new project..." });
  } catch (error) {
    res.json({ error });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const project_id = req.params.project_id;

    const deleteProj: Project[] = await (
      await pool
        .request()
        .input("project_id", mssql.VarChar, project_id)
        .execute("deleteProject")
    ).recordset;

    res.json({ message: "Deleted project..." });
  } catch (error) {
    res.json({ error });
  }
};

export const getallProjects = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const allprojects: Project[] = await (
      await pool.request().execute("getallprojects")
    ).recordset;
    console.log(allprojects);

    res.json(allprojects);
  } catch (error) {
    console.log(error);
  }
};

export const getProject = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const assigned_user_email = req.params.email;

    const getproject: Project[] = await (
      await pool
        .request()
        .input("assigned_user_email", mssql.VarChar, assigned_user_email)
        .execute("getProject")
    ).recordset;

    return res.json(getproject);
  } catch (error) {
    res.json({ error });
  }
};

export const completeProjects = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const project_id = req.params.project_id;

    const cproject: Project[] = await (
      await pool
        .request()
        .input("project_id", mssql.VarChar, project_id)
        .execute("completeProject")
    ).recordset;

    res.json(cproject);
  } catch (error) {
    res.json({ error });
  }
};
