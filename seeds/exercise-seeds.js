const { Exercise } = require('../models');

const exerciseData = [
    {
      "exercisename": "Bench Press",
       "sets": 3
    },
    {
        "exercisename": "Deadlift",
        "sets": 3
    },
    {
        "exercisename": "tricep pressdown",
        "sets": 4
    
    },
    {
        "exercisename": "Shoulder press",
        "sets": 3
    
    },
    {
        "exercisename": "rows",
        "sets": 3
    
    },
    {
        "exercisename": "squats",
        "sets": 4
    },
    {
        "exercisename": "calf raises",
        "sets": 2
    
    },
    {
        "exercisename": "Lunges",
        "sets": 2,
    
    },
    {  
        "exercisename": "glute raises",
        "sets": 3
    },
    {
        "exercisename": "Leg curls",
        "sets": 2
    
    },
    {
        "exercisename": "Pull ups",
        "sets": 4
    
    },
    {    
        "exercisename": "lat pulldowns",
        "sets": 3
   },
   {
      "exercisename": "bicep curls",
       "sets": 4
   },
   {
      "exercisename": "face pulls",
       "sets": 2
   },
   {
       "exercisename": "leg extension",
       "sets": 3
    }

];

const seedExercise = () => Exercise.bulkCreate(exerciseData,{individualHooks:true});

module.exports = seedExercise;