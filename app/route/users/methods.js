const users = require("../../model/users");


exports.list = function(req, res, next){
  users.find({}).then(function(response){
  	res.send(response);
  })
}

exports.create = function(req, res){
	  users.create(req.body)
  .then(function(response){
    console.log(response);
    res.send(response);
  }).catch(error =>[
    res.send(error)
  ])
}

//get un registro por id
exports.findById = function(req, res) {
	users.findById(req.params.id, function(err, users) {
		if(err) return res.send(500, err.message);
		console.log('GET /users/' + req.params.id);
		res.status(200).jsonp(users);
	});
}; 
//login
exports.login = function(req,res) {
  users.findOne({userName: req.body.userName, password:req.body.password}, function(err, users){
    if(err) return res.send(500, err.message);
    if (!users) { return res.send(false)}
    res.send(true);
  })
}

//DELETE - Borrar un registro con el id
exports.delete = function(req, res) {
  users.findById(req.params.id, function(err, users) {
    users.remove(function(err) {
      if(err) return res.send(500, err.message);
      res.json({users:users, message: 'Successfully deleted' });
      console.log('Successfully deleted')
     });
  });
};


//PUT - actualizar un registro existente
exports.update = function(req, res) {
 users.findById(req.params.id, function(err, users) {
  users.userName = req.body.userName;
  users.password = req.body.password;
  users.email = req.body.email;
  users.save(function(err) {
   if(err) return res.send(500, err.message);
   res.status(200).jsonp(users);
   console.log('Successfully updated')
  });
 });
};