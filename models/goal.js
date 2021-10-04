const mongoose = require('mongoose');
const { Schema } = mongoose;

const goalSchema = new Schema ({
    durationGoal: Number,
    weightGoal: String,
    repsGoal: Number,
    setsGoal: Number,
    distanceGoal: Number,
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})


const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;