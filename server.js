var express = require("express");
var app = express();
var port = 5000;

app.get('/', function(req, res){
  res.sendfile("./templates/pizza.html");
});



app.listen(port, function(){
  console.log("listening at " + port);
});

