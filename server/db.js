const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hmhendrycks:reviews@projectdb-devxk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }); 
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const ProductReviewSchema = new mongoose.Schema({
    id: String,
    reviews: []
});

const product = mongoose.model('Product', ProductReviewSchema);

const getAll = (cb) => {
    product.find()
        .then((data) => cb(data))
}

const addReview = (reviewData, cb) => {
    const newReview = new product(reviewData);
    product.save(newReview)
        .then((result) => cb(result));
}

// allItems is from oldData.js for initial seeding
// db.once('open', function () {
//     console.log("connected mofo");
//     allItems.map((newItem) => {
//         let item = new product(newItem);
//         item.save(() => {
//             console.log('item saved to database');
//         });
//     });
// }.bind(this));

module.exports = { getAll, addReview };