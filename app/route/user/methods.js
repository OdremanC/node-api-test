const user = require("../../model/user");

exports.list = function(req, res){
  user.find({}).then(function(response){
  	res.send(response);
  })
}

exports.create = function(req, res){
	console.log(req.body)
  user.create(req.body)
  .then(function(response){
  	res.send(response);
  })
}