const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const journeyRoutes = require("./controllers/journeyController");
require("./config/dbConfig");

app.use(cors());

app.use(bodyParser.json());

app.use("/journey", journeyRoutes);

const port = 3000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
