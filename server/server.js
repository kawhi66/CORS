var express = require('express');
var app = express();

app.get('/nonsupport/cors/get', function (req, res) {
    res.send('Hello World');
});

app.get('/support/cors/get', function (req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.send('Hello World');
});

app.post('/nonsupport/cors/post', function (req, res) {
    res.status(200).end('this is a cors POST request');
});

app.post('/support/cors/post', function (req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.status(200).end('this is a cors POST request');
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}