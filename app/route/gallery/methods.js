const gallery = require("../../model/gallery");
var validate = require('express-validation');
var validation = require('./validation/albumForm.js');

exports.list = function(req, res, next){
  gallery.find({}).then(function(response){
    res.status(200).send(response)
  });
};


exports.create = function(req, res){
    gallery.create(req.body)
  .then(function(response){
    console.log(response);
    res.send(response);
  }).catch(error =>[
    res.sendStatus(400)
  ])
}

//get un registro por id
exports.findById = function(req, res) {
  gallery.findById(req.params.id, function(err, gallery) {
    if(err) return res.send(500, err.message);
    console.log('GET /gallery/' + req.params.id);
    res.status(200).jsonp(gallery);

  });
}; 

//DELETE - Borrar un registro con el id
exports.delete = function(req, res) {
  gallery.findById(req.params.id, function(err, gallery) {
    gallery.remove(function(err) {
      if(err) return res.send(500, err.message);
      res.json({gallery:gallery, message: 'Successfully deleted' });
      console.log('Successfully deleted')
     });
  });
};

//DELETE - Borrar un registro con el id
exports.deletePics = function(req, res) {
  gallery.findById(req.params.id, function(err, gallery) {
      const newArray = gallery.photos.filter(photo => photo._id != req.body.photoID);
      gallery.idAutor = gallery.idAutor;
      gallery.autorName = gallery.autorName;
      gallery.albumTitle = gallery.albumTitle;
      gallery.albumDescription = gallery.albumDescription;
      gallery.portada = gallery.portada;
      gallery.photos = newArray;
      
      gallery.save(function(err) {
      if(err) return res.send(500, err.message);
      res.status(200).jsonp(gallery);
      console.log('Successfully updated')
    });
  });
}
