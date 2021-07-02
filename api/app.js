const express = require("express");
const logger = require("morgan");
const routeController = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

const uri =
  process.env.DB_URL || "mongodb://localhost:2717/test?replicaSet=rs0";

async function dbconnect() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}
dbconnect();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routeController);

const server = app.listen(port);

const io = require("socket.io")(server, {
  // below are engine.IO options
  cors: { origin: "*" },
});

require("./socket").socket({io,mongoose});

module.exports = app;
