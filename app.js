/* eslint-disable prettier/prettier */
/* eslint-disable import/newline-after-import */
const express = require("express");
const morgan = require("morgan");
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// MIDDLEWARES
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

const tourRouter = require("./routes/toursRoutes");
const userRouter = require("./routes/usersRoutes");

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// start server
module.exports = app;
