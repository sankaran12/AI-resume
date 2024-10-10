const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const db = require("./Database/db");
const router = require("./Router/index");
const morgan = require("morgan");
const { errorHandler, notFound } = require("./error/errorhandler");
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", router);
app.use(errorHandler);
app.use(notFound);
db();
const port = 4000 || process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));
