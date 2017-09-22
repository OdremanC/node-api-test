const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
//requerimos el archivo de configuracion
const config = require('./config');
app.use(bodyParser.json());

//co nfiguramos mongo con los datos el archivo de config
mongoose.connect(config.mongo.url,config.mongo.options);

mongoose.connection
  .on('error', function(err) {
        console.log(err)
        process.exit(1);
  })
  .on('open', function() {
        console.log("open")
  });

//configuramos el puerto

require("./app/route")(app);
app.listen(config.port);