import { Router } from "express";

import {
  addNewProject,
  assignNewProject,
  deleteProject,
  getallProjects,
  getProject,
  completeProjects,
} from "../controllers/projectController";


const projectRouter = Router();


projectRouter.post("/newproject", addNewProject);
projectRouter.post("/assignnewproject", assignNewProject);
projectRouter.get("/deleteProject/:project_id", deleteProject);
projectRouter.get("/projects", getallProjects);
projectRouter.get("/project/:email", getProject);
projectRouter.get("/complete/:project_id", completeProjects);

export default projectRouter;
