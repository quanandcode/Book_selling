require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { json } = require("express");
const route = require("./routes/index");
const app = express();
const cors = require("cors");
//middleware
app.use(cors());
app.use(json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//route
route(app);
//connect to db & listening port
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connect to db & listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
