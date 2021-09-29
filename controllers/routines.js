require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const passport = require('passport');

const { Routine, User } = require('../models');

router.get('/', passport.authenticate('jwt', { session: false }), async ( req, res ) => {
    console.log('hit get routines route');
    const { id } = req.user;
    try {
        let currentUser = await User.findById(id);
        let routines = await currentUser.populate('routines');
        console.log('currentuser routines', routines);

        res.status(200).json({
            routines: currentUser.routines
        })
        
    } catch (error) {
        console.log('routines page', error);
        res.status(500).json({
            message: 'There was an error. Please try again.'
        })
    }
})

module.exports = router;