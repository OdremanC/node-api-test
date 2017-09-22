//requerimos el modelo
const stock = require("../../model/stock");

//get todos los registros
exports.list = function(req, res){
  stock.find({}).then(function(response){
  	res.send(response);
  })
}
//crear registros
exports.create = function(req, res){
	console.log(req.body)
  stock.create(req.body)
  .then(function(response){
  	res.send(response);
  })
}
//get un registro por id
exports.findById = function(req, res) {
	stock.findById(req.params.id, function(err, stock) {
		if(err) return res.send(500, err.message);
		console.log('GET /stock/' + req.params.id);
		res.status(200).jsonp(stock);
	});
};

//DELETE - Borrar un registro con el id
exports.delete = function(req, res) {
 	stock.findById(req.params.id, function(err, stock) {
		stock.remove(function(err) {
			if(err) return res.send(500, err.message);
			res.json({ message: 'Successfully deleted' });
		 });
 	});
};

//PUT - actualizar un registro existente
exports.update = function(req, res) {
 stock.findById(req.params.id, function(err, stock) {
	stock.cantidad = req.body.cantidad;
	stock.articulo = req.body.articulo;
	stock.categoria = req.body.categoria;
 	stock.save(function(err) {
	 if(err) return res.send(500, err.message);
	 res.status(200).jsonp(stock);
 	});
 });
};