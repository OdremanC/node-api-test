//requerimos mongo
var mongoose = require('mongoose');
 // creamos el esquema de la base de datos (los campos y el tipo de datos)
let GallerySchema = new mongoose.Schema({
  idUser: { type: String, required:true},
  albumTitle: { type: String, required:true},
  albumDescription: { type: String, required:true},
  albumCreationDate: { type: Date, required:true},
  photos:[
    {url: String, title:String, description:String}
  ]  
});
//exportamos el modelo
module.exports = mongoose.model('gallery', GallerySchema );

