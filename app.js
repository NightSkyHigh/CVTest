const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const data = require('./info.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {data : data});
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(process.env.PORT || 8080)