const gallery = require("../../model/gallery");


exports.list = function(req, res, next){
  gallery.find({}).then(function(response){
    res.send(response);
  })
}

exports.create = function(req, res){
    gallery.create(req.body)
  .then(function(response){
    console.log(response);
    res.send(response);
  }).catch(error =>[
    res.send(error)
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