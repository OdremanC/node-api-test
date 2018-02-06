//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let UsersSchema = new mongoose.Schema({
	userName: { type: String, required:true},
	password:{type: String, required:true},
	email:{type:String, required:true}
});
//exportamos el modelo
module.exports = mongoose.model('users', UsersSchema );

