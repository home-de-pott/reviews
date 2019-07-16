const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT, HOST} = require('../config.js');
const db = require('./db.js');

const port = PORT || 3000;
const host = HOST || '0.0.0.0';

app.use('/products/:id', express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

app.get("/reviews/:id", (req, res) => {
    // get reviews for product based on product id
    const allItems = db.getAll((data) => {
        const reviews = data[data.map((product) => product.id).indexOf(req.params.id)].reviews;
        res.send(reviews);
    });
});

app.listen(port, host, () => {
    console.log("Listening to port 3000");
});