var express = require('express');
var app = express();

// Diretório do debug
app.use(express.static(__dirname + '/debug'));
app.listen(3333);
