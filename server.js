
var express = require('express');
var app = express();

app.use('/', express.static('docs'));

app.listen(process.env.port || process.env.PORT || 3000);
