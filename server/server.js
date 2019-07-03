const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hello world reviews div");
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})