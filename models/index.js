const User = require('./User');
const Exercise = require('./Exercise');
const Workout = require('./Workout');
const UserExercise = require('./UserExercise');
const UserWorkout = require('./UserWorkout');
const WorkoutExercise = require('./WorkoutExercise');

// User.hasMany(Exercise,{
//     foreignKey : 'user_id'
// });

// Exercise.belongsTo(User,{
//     foreignKey : 'user_id' ,
//     onDelete : 'SET NULL'
// });

Exercise.belongsToMany(Workout, {
    through: {
        model: WorkoutExercise
    }
})

Workout.belongsToMany(Exercise, {
    through: {
        model: WorkoutExercise
    }
})

User.belongsToMany(Workout, {
    through: {
        model: UserWorkout
    }
})

Workout.belongsToMany(User, {
    through: {
        model: UserWorkout
    }
})

// Exercise.hasMany(WorkoutExercise,{
//     foreignKey : 'exercise_id'
// });

// WorkoutExercise.belongsTo(Exercise,{
//     foreignKey : 'exercise_id',
//     onDelete: 'SET NULL'
// });

// Workout.hasMany(WorkoutExercise,{
//     foreignKey : 'workout_id',

// });

// WorkoutExercise.belongsTo(Workout,{
//     foreignKey : 'workout_id',
//     onDelete: 'SET NULL'
// });

// Workout.hasMany(UserWorkout,{
//     foreignKey : 'workout_id',

// });
// UserWorkout.belongsTo(Workout,{
//     foreignKey: 'workout_id',
//     onDelete: 'SET NULL'
// });

// User.hasMany(UserWorkout,{
//     foreignKey: 'user_id'
// });

// UserWorkout.belongsTo(User,{
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// })

// User.hasMany(UserExercise,{
//     foreignKey : 'user_id'
// });

UserExercise.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// Exercise.hasMany(UserExercise,{
//     foreignKey : 'exercise_id'
// });

UserExercise.belongsTo(Exercise,{
    foreignKey : 'exercise_id',
    onDelete: 'SET NULL'
});


module.exports = {User, Exercise, Workout, WorkoutExercise, UserExercise , UserWorkout};

