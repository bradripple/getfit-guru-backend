const mongoose = require('mongoose');
const { Schema } = mongoose;

const routineSchema = new Schema ({
    day: {
        type: Date,
        default: new Date()
    },
    targetArea: {
        type: String,
        required: true
    }, 
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'}]
});

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;