const { UserWorkout }  = require('../models');

const uworkoutData = [
    {
        date: "09/19/2022",
        comment: "super good day all weight felt good" ,
        user_id: 3,
        workout_id: 2,
    },
    {
        date: "09/10/2022",
        comment: "super good day all weight felt good" ,
        user_id: 1,
        workout_id: 3,
    },
    {
        date: "09/15/2022",
        comment: "super good day all weight felt good" ,
        user_id: 4,
        workout_id: 2,
    },
    {
        date: "09/09/2022",
        comment: "super good day all weight felt good" ,
        user_id: 2,
        workout_id: 1,
    }

];

const seedUserWorkout = () => UserWorkout.bulkCreate(uworkoutData,{individualHooks:true});

module.exports = seedUserWorkout;