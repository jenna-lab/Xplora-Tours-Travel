import { Router } from "express";

import {
  addNewTour,
  // assignNewTour,
  // deleteTour,
  getAllTours,
  // completeTours,
  // getTour,
} from "../controllers/tourController";


const TourRouter = Router();


TourRouter.post("/newtour", addNewTour);
// TourRouter.post("/assignnewtour", assignNewTour);
// TourRouter.get("/deletetour/:tour_id", deleteTour);
TourRouter.get("/tours", getAllTours);
// TourRouter.get("/tour/:email", getTour);
// TourRouter.get("/complete/:tour_id", completeTours);

export default TourRouter;
