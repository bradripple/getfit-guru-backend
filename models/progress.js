const mongoose = require('mongoose');
const { Schema } = mongoose;

const progressSchema = new Schema ({
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'},
    date: {
        type: Date,
        default: new Date()
    },
    duration: Number,
    weight: String,
    reps: Number,
    sets: Number,
    distance: Number
})


const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;