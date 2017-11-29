var express = require('express');
var app = express();

var messages = [{text:'this is text', owner:'Jane'}, {text:'other text', owner:'Joe'}];

app.get('/messages', (req, res) => {
    res.json(messages);
})

app.listen(1234);
