var express = require('express');
var app = express();

app.all('/cors/nonsupport', function (req, res) {
    res.send('Hello /cors/nonsupport');
})

app.all('/cors/support', function (req, res) {
    res.set('Access-Control-Allow-Headers', 'X-Custom-Header');
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.status(200).end('Hello /cors/support');
})

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}