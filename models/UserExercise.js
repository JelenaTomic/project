const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserExercise extends Model{}

UserExercise.init({
    id: {
        type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isNumeric:true
        }
    },
    reps: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isNumeric:true
        }
    },
    exercise_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'exercise',
            key:'id'
        }

    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'user',
            key: 'id'
       }
    },
},
    {       
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'UserExercise',
        timestamps: false
    }
);

module.exports = UserExercise;