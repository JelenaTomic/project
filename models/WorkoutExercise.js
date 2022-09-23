const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkoutExercise extends Model{}

WorkoutExercise.init({
    id: {
        type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
    } ,
    workout_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'workout',
            key: 'id'
        }
    },
    exercise_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'exercise',
            key:'id'
        }

    }
},
{       
   sequelize,
   freezeTableName:true,
   underscored:true,
   modelName:'WorkoutExercise',
   timestamps: false

} );

module.exports = WorkoutExercise ;
    



