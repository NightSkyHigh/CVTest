const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', (req, res) => {
    fs.readFile('./info.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    })
});

app.listen(process.env.PORT || 8080)