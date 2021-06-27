const express = require("express");
const logger = require("morgan");
const routeController = require("./routeController");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 3000;

const uri = process.env.DB_URL || "mongodb://localhost:27017";

async function dbconnect() {
  
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
}
dbconnect();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routeController);

const server = app.listen(port);

module.exports.server = server;

require("./socket").socket();

module.exports = app;
