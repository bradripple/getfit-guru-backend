const { Exercise } = require('../models');

// Make a function -> seedExercises
// function seedExercises() {}

// function seedExercises() {}

const exercises = [
    {
        "type": "Resistance",
        "muscleGroup": "Chest",
        "name": "Chest Press",
        "img_url": "https://i.imgur.com/5dMJ1ZY.jpg",
        "equipment": "Barbell, Bench",
        "steps": ["Lie face up on a flat bench, and grip a barbell with the hands slightly wider than shoulder-width. Press the feet into the ground and the hips into the bench while lifting the bar off the rack. Slowly lower the bar to the chest by allowing the elbows to bend out to the side. Stop when the elbows are just below the bench, and press feet into the floor to press the weight straight up to return to the starting position."]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
    {
        "type": "Academic or Scholar",
        "muscleGroup": "Score",
        "name": "CT",
        "img_url": "CT",
        "equipment": "CT",
        "steps": ["CT"]
    },
]

// type: {
//     type: String, 
//     enum: ['Resistance', 'Cardio'],
//     required: true 
// },
// muscleGroup: {
//     type: String,
//     enum: ['Chest', 'Back', 'Arms', 'Shoulders', 'Legs', 'Calves', 'Core', 'Heart' ],
//     required: true
// },
// name: {
//     type: String,
//     required: true
// },
// img_url: String,
// equipment: String,
// steps: Array

function seedExercises() {
    // Use the Exercise.insertMany() <function> to put a bunch of Exercise (model) into the database
    // we have to come up with some Exercise (model)

    Exercise.insertMany([]) // it only can take an array
}

// Use the Exercise.insertMany() function to put a bunch of Exercise (model) into the database

// Once we do that, we can confirm by using Exercise.find({}) to see all of the added Exercise (model)

// critical <action> -> (target)

// 5 datatypes
// 'string', 12, { name: 'Rome' }, [], true, false, null, undefined