import express, { json } from "express";

import cors from "cors";
import userRouter from "./Routes/userRouter";
import projectRouter from "./Routes/projectRouter";

const app = express();

app.use(json());
app.use(cors());
app.use("/user", userRouter);
app.use("/project", projectRouter);

app.listen(9000, () => {
  console.log("Application Running");
});
