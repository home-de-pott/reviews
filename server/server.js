const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT, HOST} = require('../config.js');

const port = PORT || 3000;
const host = HOST || '0.0.0.0';

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hello world reviews div");
})

app.listen(port, host, () => {
    console.log("Listening to port 3000");
})