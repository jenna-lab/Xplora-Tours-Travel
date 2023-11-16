import express, { json } from "express";

import cors from "cors";
import userRouter from "./Routes/userRouter";
import TourRouter from "./Routes/tourRouter";

const app = express();

app.use(json());
app.use(cors());
app.use("/user", userRouter);
app.use("/tour", TourRouter);

app.listen(9000, () => {
  console.log("Application Running");
});
