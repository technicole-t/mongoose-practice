const router = require("express").Router();
const Journey = require("../models/journey");

router.post("/createJourney", function (req, response, next) {
  const body = req.body;
  const journey = new Journey(body);
  journey.save(function (error, result) {
    if (error) {
      return next(error);
    }
    response.status(201).send(result);
  });
});

router.get("/getAllJourneys", function (req, res, next) {
  Journey.find(function (err, journeys) {
    if (err) return next(err);
    res.send(journeys);
  });
});

router.put("/updateJourney/:id", function (req, res, next) {
  Journey.findByIdAndUpdate(req.params.id, req.body, function (err, journey) {
    if (err) return next(err);
    res.send(journey);
  });
});

router.delete("/removeJourney/:id", function (req, res, next) {
  Journey.findByIdAndRemove(req.params.id, function (err, journey) {
    if (err) return next(err);
    res.status(204).send(journey);
  });
});

module.exports = router;
