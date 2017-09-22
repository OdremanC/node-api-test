//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let stockSchema = new mongoose.Schema({
	cantidad: { type: Number, required:true},
	articulo:{type: String, required:true},
	categoria: {type:String, required: true}
});
//exportamos el modelo
module.exports = mongoose.model('stock', stockSchema );

