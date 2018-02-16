//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let GallerySchema = new mongoose.Schema({

  idAutor: { type: String, required:true},
  autorName:{ type: String, required:true},
  albumTitle: { type: String, required:true},
  albumDescription: { type: String, required:true},
  portada:{ type:String, required:true},
  photos: [{ name: String }]
});
//exportamos el modelo
module.exports = mongoose.model('gallery', GallerySchema );

