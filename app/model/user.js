//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let UserSchema = new mongoose.Schema({
	name: { type: String, required:true},
	lastName:{type: String, required:true},
	dni: {type:Number, required: true}
});
//exportamos el modelo
module.exports = mongoose.model('User', UserSchema );

