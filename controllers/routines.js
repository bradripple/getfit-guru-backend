require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const passport = require('passport');

const { Routine } = require('../models');

router.get('/', async ( req, res ) => {
    try {
        let allRoutines = await Routine.find({});

        res.status(200).json({
            routines: allRoutines
        })
        
    } catch (error) {
        console.log('routines page', error);
        res.status(500).json({
            message: 'There was an error. Please try again.'
        })
    }
})

module.exports = router;