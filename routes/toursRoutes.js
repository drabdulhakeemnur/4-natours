const express = require("express");
const router = express.Router();
const {
  getAlltours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkBody,
  checkID,
} = require("../Controllers/toursControllers");
router.param("id", checkID);
router.route("/").get(getAlltours).post(checkBody, createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
