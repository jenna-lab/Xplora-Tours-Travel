import {
  deleteTour,
  updateTour,
  getAllTours,
  addNewTour,
} from "./../controllers/tourController";
import { Router } from "express";



const TourRouter = Router();


TourRouter.post("/newtour", addNewTour);
TourRouter.delete("/deletetour/:tour_id", deleteTour);
TourRouter.put("/updatetour/:tour_id", updateTour);
TourRouter.get("/tours", getAllTours);

export default TourRouter;
