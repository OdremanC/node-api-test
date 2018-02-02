//
const methods = require('./methods');

module.exports = function(app){
	app.get('/client', methods.list);
	app.post('/client', methods.create);
	app.get('/client/:id',methods.findById);
	app.delete('/client/:id',methods.delete);
	app.put('/client/:id',methods.update);
}