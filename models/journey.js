const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const journeySchema = new Schema({
  departureAirport: {
    type: String,
    required: true,
  },
  destinationAirport: {
    type: String,
    required: true,
  },
  modeOfTravel: {
    type: String,
    required: true,
  },
  dateOfTravel: {
    type: Date,
  },
});

const Journey = model("journey", journeySchema);

module.exports = Journey;
