//
const methods = require('./methods');


module.exports = function(app){
  app.get('/gallery', methods.list);
  app.post('/gallery', methods.create);
  app.delete('/gallery/:id',methods.delete);
  app.get('/gallery/:id',methods.findById);
  app.delete('/gallery/delete/:id',methods.deletePics);
}
