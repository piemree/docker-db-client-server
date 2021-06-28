const express = require("express");
const logger = require("morgan");
const routeController = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

const uri = process.env.DB_URL || "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/?replicaSet=rs0";


async function dbconnect() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
}
//dbconnect();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routeController);

const server = app.listen(port);

module.exports.server = server;

require("./socket").socket();

module.exports = app;
