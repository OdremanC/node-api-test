//
const methods = require('./methods');

module.exports = function(app){
	app.get('/stock', methods.list);
	app.post('/stock', methods.create);
	app.get('/stock/:id',methods.findById);
	app.delete('/stock/:id',methods.delete);
	app.put('/stock/:id',methods.update);
}