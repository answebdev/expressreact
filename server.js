const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello from Express!');
});

app.listen(3001, function () {
    console.log('Server is running on Port 3001...');
});