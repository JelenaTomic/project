const seedUsers = require('./user-seeds');
const seedExercises = require('./exercise-seeds');
const seedWorkouts = require('./workout-seeds');
const seedUserExercises = require('./userexercise-seeds');
const seedUserWorkouts = require('./userworkout-seeds');
const seedWorkoutExercises = require('./workoutexercise-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true }),
    await seedUsers(),
    await seedExercises(),
    await seedWorkouts(),
    await seedUserExercises(),
    await seedUserWorkouts(),
    await seedWorkoutExercises(),

    
    
   
    process.exit(0);
};

seedAll();