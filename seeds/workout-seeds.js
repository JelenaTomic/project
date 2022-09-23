const { Workout } = require('../models');

const workoutData = [
    {
        "workout_name" : "FullBody"
    },
    {
        "workout_name" : "UpperBody"
    },
    {
        "workout_name" : "LowerBody"
    }
];

const seedWorkout = () => Workout.bulkCreate(workoutData,{individualHooks:true});

module.exports = seedWorkout;