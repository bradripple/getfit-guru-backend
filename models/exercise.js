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
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img_url: String,
    equipment: String,
    steps: Array
})


const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;