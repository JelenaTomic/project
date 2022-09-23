const { UserExercise } = require('../models');

const userexerciseData = [
    {
        weight: 100,
        reps: 12,
        exercise_id: 1,
        user_id : 2
    },
    {
        weight: 150,
        reps: 10,
        exercise_id: 11,
        user_id : 1
    },
    {
        weight: 50,
        reps: 12,
        exercise_id: 7,
        user_id : 4
    },
    {
        weight: 40,
        reps: 10,
        exercise_id: 10,
        user_id : 5
    }

];

const seedUserExercise = () => UserExercise.bulkCreate(userexerciseData);
module.exports = seedUserExercise;