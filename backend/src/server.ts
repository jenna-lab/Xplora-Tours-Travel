import express from "express";
const app = express();

app.use(express.json());
// app.use("/user", userRouter);
// app.use("/tours", toursRouter);

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
