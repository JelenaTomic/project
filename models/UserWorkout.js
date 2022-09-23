const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserWorkout extends Model{}

UserWorkout.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false,
        
    },
    comment:{
        type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'user',
            key: 'id'
       }
    },
    workout_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'workout',
            key: 'id'
        }
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'UserWorkout',
    },
);

module.exports = UserWorkout;