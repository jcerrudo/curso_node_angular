'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;

mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err, res) => {
  if(err){
    throw err;
  }else{
    app.listen(port, function(){
      console.log("API REST FAVORITOS FUNCIONANDO EN http://localhost:"+port);

    });
  }

});
