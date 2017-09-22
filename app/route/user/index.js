//
const methods = require('./methods');

module.exports = function(app){
	app.get('/user', methods.list);
	app.post('/user', methods.create);
}