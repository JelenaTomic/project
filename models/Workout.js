const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model{}

Workout.init({
    id: {
        type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
    } ,
    workout_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
},
    {
    sequelize,
    freezeTableName:true,
    underscored:true,
    modelName:'Workout',
    timestamps: false

   

} );
module.exports = Workout