
var express = require('express');
var app = express();

app.get('/*', express.static('docs'));

app.listen(process.env.port || process.env.PORT || 3000,()=>console.log('App started'));
