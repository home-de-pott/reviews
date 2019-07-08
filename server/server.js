const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT, HOST} = require('../config.js');

const port = PORT || 3000;
const host = HOST || '0.0.0.0';

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

app.get("/reviews", (req, res) => {
    const reviews = [
        {
            userName: 'Sheila',
            date: new Date(),
            header: 'Great father\'s day gift',
            review: 'Comfortable grip, definitely durable, very handy to have the magnet for the nail on top so you can hold the piece your nailing and hammer.',
            rating: 3,
            verifiedPurchase: true,
            recommend: true,
            helpfulCount: 0,
            notHelpfulCount: 0
        },
        {
            userName: 'Sheila',
            date: new Date(),
            header: 'Great father\'s day gift',
            review: 'Comfortable grip, definitely durable, very handy to have the magnet for the nail on top so you can hold the piece your nailing and hammer.',
            rating: 4,
            verifiedPurchase: true,
            recommend: true,
            helpfulCount: 0,
            notHelpfulCount: 0
        },
        {
            userName: 'Sheila',
            date: new Date(),
            header: 'Great father\'s day gift',
            review: 'Comfortable grip, definitely durable, very handy to have the magnet for the nail on top so you can hold the piece your nailing and hammer.',
            rating: 4,
            verifiedPurchase: true,
            recommend: true,
            helpfulCount: 0,
            notHelpfulCount: 0
        }
    ]
    res.send(reviews);
});

app.listen(port, host, () => {
    console.log("Listening to port 3000");
});