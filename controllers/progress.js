require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const passport = require("passport");

const { Progress, User } = require("../models");


router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    console.log("we hit the post route ");
    const { id } = req.user;
    
    try {
        let newProgress = await Progress.create({
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
    console.log('hit get routines route');
    const { id } = req.user;
    try {
      let currentUser = await User.findById(id);
      let progress = await currentUser.populate('progress');
      console.log('currentuser progress', progress);

      res.status(200).json({
        progress: currentUser.progress,
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