const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT, HOST} = require('../config.js');
const db = require('./db.js');
const cors = require('cors');
const port = PORT || 3000;
const host = HOST || '0.0.0.0';

app.use(cors());
app.use('/', express.static(__dirname + '/../dist'));
app.use('/products/:id', express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/reviews/:id", (req, res) => {
    // get reviews for product based on product id
    db.getAll((data) => {
        const reviews = data[data.map((product) => product.id).indexOf(req.params.id)].reviews;
        res.send(reviews);
    });
});

app.post("/writeReview/:id", (req, res) => {
    // find way to get product id in request
    // query db for review by id in db file and add reviewdata
    // to review array
    // 
    const months = {
        Jan: "January",
        Feb: "February",
        Mar: "March",
        Apr: "April",
        May: "May",
        Jun: "June",
        Jul: "July",
        Aug: "August",
        Sep: "September",
        Oct: "October",
        Nov: "November",
        Dec: "December"
    }
    const date = new Date();
    const year = date.getFullYear();
    const month = months[date.toDateString().split(" ")[1]];
    const day = date.getDate();
    const reviewData = {
        userName: req.body.username,
        date: month + " " + day + ", " + year,
        header: req.body.header,
        review: req.body.review,
        rating: Number.parseInt(req.body.rating),
        verifiedPurchase: false,
        recommend: req.body.chooseone === "true",
        helpfulCount: 0,
        notHelpfulCount: 0,
        images: []
    }
    // db.addReview(reviewData, )
    res.send(req.params.id);
});

app.listen(port, host, () => {
    console.log("Listening to port 3000");
});