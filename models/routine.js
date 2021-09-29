const mongoose = require('mongoose');
const { Schema } = mongoose;

const routineSchema = new Schema ({
    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    targetArea: {
        type: String,
    }, 
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'}]
});

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;