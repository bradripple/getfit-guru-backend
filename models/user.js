const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    timesLoggedIn: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date()
    },
    routines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Routine'}]
});

const User = mongoose.model('User', userSchema);


module.exports = User;