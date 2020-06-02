const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/user');
require('./models/index')();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/api/', index);

app.get('/', (req, res) => {
    res.send("welcome")
})

module.exports = app;
