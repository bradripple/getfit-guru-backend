const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema ({
    type: {
        type: String, 
        enum: ['Resistance', 'Cardio'],
        required: true 
    },
    muscleGroup: {
        type: String,
        enum: ['Chest', 'Back', 'Arms', 'Shoulders', 'Legs', 'Calves', 'Core', 'Heart/Respiratory' ],
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