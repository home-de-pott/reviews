require('dotenv').config();
const mongoose = require('mongoose');
const password = process.env.password;
mongoose.connect(`mongodb+srv://hmhendrycks:${password}@projectdb-devxk.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true }); 
const db = mongoose.connection;
mongoose.set('useFindAndModify', false);

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

const addReview = (reviewData, id, cb) => {
    product.findOneAndUpdate(
        { "id": id },
        { $push: { "reviews": reviewData }}
    )
    .then(cb());
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