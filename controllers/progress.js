require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const passport = require("passport");

const { Progress, User, Exercise } = require("../models");


router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    console.log("we hit the post route ");
    const { id } = req.user;
    
    try {
        let newProgress = await Progress.create({
            name: req.body.exerciseName,
            exercise: req.body.exerciseId,
            duration: req.body.duration,
            weight: req.body.weight,
            reps: req.body.reps,
            sets: req.body.sets,
            distance: req.body.distance
        });
        let currentUser = await User.findById(id);
        currentUser.progress.push(newProgress);
        currentUser.save();
        
        console.log(newProgress);
        res.json(newProgress);
    } catch (error) {
        console.log('error', error);
        res.json(error)
    }
});

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    // console.log('hit get routines route');
    const { id } = req.user;
    try {
      let currentUser = await User.findById(id);
      let userWithProgress = await currentUser.populate('progress');
      let progress = userWithProgress.progress;
      console.log('progress', progress);
      // let foundExercise = await Exercise.findById(progress.exercise);
      // let exercise = await Exercise.findById(progress.exercise);
      // console.log('currentuser progress', progress);
      let progressWithExercises = progress.map( (p, i) => {
        let exerciseId = p.exercise;
        // let name = foundExercise.name;
        // console.log('p', p);
        // console.log('foundexercise', foundExercise);
        // console.log('xxxxxxxx', {
        //   reps: p.reps,
        //   sets: p.sets,
        //   weight: p.weight,
        //   date: p.date,
        //   duration: p.duration,
        //   distance: p.distance,
        //   name,
        //   foundExercise: foundExercise
        // });
        return {
          reps: p.reps,
          sets: p.sets,
          weight: p.weight,
          date: p.date,
          duration: p.duration,
          distance: p.distance,
          // name,
          // foundExercise: foundExercise
        }
      })

      console.log('progress with exercise', progressWithExercises);
      res.status(200).json({
        progress: progressWithExercises
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