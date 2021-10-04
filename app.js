require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('passport');
require('./config/passport')(passport);

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded( { extended: false } ));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

//routes & controllers
// home route
app.get('/', async ( req, res ) => {
    res.json({ 
        name: 'Template',
        message: 'Welcome, you beautiful creature!'
    });
});

//import models
app.use('/users', require('./controllers/users'))
app.use('/routines', require('./controllers/routines'))
app.use('/exercises', require('./controllers/exercises'))
app.use('/progress', require('./controllers/progress'))
app.use('/goals', require('./controllers/goals'))

app.listen(PORT, () => {
    console.log(`API running on ${PORT}, you beautiful creature!`);
});

module.exports = app;