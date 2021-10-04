require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const passport = require("passport");

const { Goal, User, Exercise } = require("../models");


router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    console.log("we hit the post route for goals", req.body);
    const { id } = req.user;
    
    try {
        let newGoal = await Goal.create({
            exercise: req.body.exerciseId,
            durationGoal: req.body.durationGoal,
            weightGoal: req.body.weightGoal,
            repsGoal: req.body.repsGoal,
            setsGoal: req.body.setsGoal,
            distanceGoal: req.body.distanceGoal
        });
        let currentUser = await User.findById(id);
        currentUser.goals.push(newGoal);
        currentUser.save();
        
        console.log('newGoal currentUser', currentUser);
        res.json(newGoal);
    } catch (error) {
        console.log('error', error);
        res.json(error)
    }
});

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    console.log('hit get goals route');
    const { id } = req.user;
    try {
    //   let goals = await Goal.find({ user: id }).populate('exercise');
      let currentUserGoals = await User.findById(id).populate('goals');
      console.log('currentExercise goals:', currentUserGoals.goals);

      res.status(200).json({
        goals: currentUserGoals.goals
      });
    } catch (error) {
      console.log("routines page", error);
      res.status(500).json({
        message: "There was an error. Please try again.",
      });
    }
  }
);

module.exports = router;