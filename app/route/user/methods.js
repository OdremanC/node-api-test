const user = require("../../model/user");


exports.list = function(req, res, next){
  user.find({}).then(function(response){
  	res.send(response);
  })
}

exports.create = function(req, res){
	
  user.create(req.body)
  .then(function(response){
    console.log(response);
    res.send(response);
  }).catch(error =>[
    res.send(error)
  ])
}

//get un registro por id
exports.findById = function(req, res) {
	user.findById(req.params.id, function(err, user) {
		if(err) return res.send(500, err.message);
		console.log('GET /user/' + req.params.id);
		res.status(200).jsonp(user);
	});
}; 

//DELETE - Borrar un registro con el id
exports.delete = function(req, res) {
  user.findById(req.params.id, function(err, user) {
    user.remove(function(err) {
      if(err) return res.send(500, err.message);
      res.json({user:user, message: 'Successfully deleted' });
      console.log('Successfully deleted')
     });
  });
};


//PUT - actualizar un registro existente
exports.update = function(req, res) {
 user.findById(req.params.id, function(err, user) {
  user.name = req.body.name;
  user.lastName = req.body.lastName;
  user.dni = req.body.dni;
  user.save(function(err) {
   if(err) return res.send(500, err.message);
   res.status(200).jsonp(user);
  });
 });
};