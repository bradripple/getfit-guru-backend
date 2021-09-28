const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema ({
    type: {
        type: String,
        required: true
    },
    muscleGroup: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    durationGoal: Number,
    weightGoal: Number,
    repsGoal: Number,
    setsGoal: Number,
    distanceGoal: Number
})


const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;