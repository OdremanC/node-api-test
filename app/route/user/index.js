//
const methods = require('./methods');

module.exports = function(app){
	app.get('/user', methods.list);
	app.post('/user', methods.create);
	app.get('/user/:id',methods.findById);
	app.delete('/user/:id',methods.delete);
	app.put('/user/:id',methods.update);
}