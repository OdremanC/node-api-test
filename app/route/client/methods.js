const client = require("../../model/client");


exports.list = function(req, res, next){
  client.find({}).then(function(response){
  	res.send(response);
  })
}

exports.create = function(req, res){
	  client.create(req.body)
  .then(function(response){
    console.log(response);
    res.send(response);
  }).catch(error =>[
    res.send(error)
  ])
}

//get un registro por id
exports.findById = function(req, res) {
	client.findById(req.params.id, function(err, client) {
		if(err) return res.send(500, err.message);
		console.log('GET /client/' + req.params.id);
		res.status(200).jsonp(client);
	});
}; 

//DELETE - Borrar un registro con el id
exports.delete = function(req, res) {
  client.findById(req.params.id, function(err, client) {
    client.remove(function(err) {
      if(err) return res.send(500, err.message);
      res.json({client:client, message: 'Successfully deleted' });
      console.log('Successfully deleted')
     });
  });
};


//PUT - actualizar un registro existente
exports.update = function(req, res) {
 client.findById(req.params.id, function(err, client) {
  client.name = req.body.name;
  client.lastName = req.body.lastName;
  client.dni = req.body.dni;
  client.civilState = req.body.civilState;
  client.save(function(err) {
   if(err) return res.send(500, err.message);
   res.status(200).jsonp(client);
   console.log('Successfully updated')
  });
 });
};