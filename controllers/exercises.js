require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const passport = require("passport");

const { Exercise } = require("../models");

router.get("/", async (req, res) => {
  try {
    let allExercises = await Exercise.find({});

    res.status(200).json({
      exercises: allExercises,
    });
  } catch (error) {
    console.log("exercises page", error);
    res.status(500).json({
      message: "There was an error. Please try again.",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    let newExercise = await Exercise.create({
      type: req.body.type,
      muscleGroup: req.body.muscleGroup,
      name: req.body.name,
      img_url: req.body.img_url,
      equipment: req.body.equipment,
      steps: req.body.steps,
      durationGoal: req.body.durationGoal,
      weightGoal: req.body.weightGoal,
      repsGoal: req.body.repsGoal,
      setsGoal: req.body.setsGoal,
      distanceGoal: req.body.distanceGoal
    });

    console.log(newExercise);
    res.json(newExercise);
  } catch (error) {}
});

module.exports = router;
