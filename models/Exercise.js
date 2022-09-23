const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model{}

Exercise.init({
    id: {
        type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
    } ,
    exercisename: {
        type: DataTypes.STRING,
        allowNull:false
    },
    sets:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isNumeric:true
        }
    },
    // user_id:{
    //     type: DataTypes.INTEGER,
    //     references:{
    //         model: 'user',
    //         key: 'id'
    //     }
    // },

},
{
    sequelize,
    freezeTableName:true,
    underscored:true,
    modelName:'Exercise',
   

   

} );
module.exports = Exercise ;
