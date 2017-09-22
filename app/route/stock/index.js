//
const methods = require('./methods');

module.exports = function(app){
	app.get('/stock/all', methods.list);
	app.post('/stock/create', methods.create);
	app.get('/stock/:id',methods.findById);
	app.delete('/stock/delete/:id',methods.delete);
	app.put('/stock/update/:id',methods.update);
}