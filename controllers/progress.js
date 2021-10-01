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


      
module.exports = router;