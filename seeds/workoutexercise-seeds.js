const { WorkoutExercise } = require('../models');

const wexerciseData =[
    {
        workout_id: 1,
        exercise_id: 2
    },
    {
        workout_id: 3,
        exercise_id: 3
    },
    {
        workout_id: 2,
        exercise_id: 2
    },
    {
        workout_id: 2,
        exercise_id: 1
    },
    {
        workout_id: 3,
        exercise_id: 4
    },
    {
        workout_id: 1,
        exercise_id: 1
    }
];

const seedWorkoutExercise = () => WorkoutExercise.bulkCreate(wexerciseData);

module.exports = seedWorkoutExercise;