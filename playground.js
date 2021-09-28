require('dotenv').config();

const { Exercise } = require('./models');

async function makeNewExercise() {
    
    let newExercise = await Exercise.create({
        type: 'Resistance',
        muscleGroup: 'Legs',
        name: 'Squats',
        durationGoal: 10,
        weightGoal: 225,
        repsGoal: 8,
        setsGoal: 4,
        distanceGoal: null
    });

    console.log(newExercise);
}

// makeNewExercise();