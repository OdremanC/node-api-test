//
const methods = require('./methods');

module.exports = function(app){
  app.get('/gallery', methods.list);
  app.post('/gallery', methods.create);
  app.get('/gallery/:id',methods.findById);

}