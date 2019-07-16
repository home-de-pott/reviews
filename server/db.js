const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hmhendrycks:Kgb9yum*@projectdb-devxk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }); 
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const ProductReviewSchema = new mongoose.Schema({
    id: String,
    reviews: []
});

const product = mongoose.model('Product', ProductReviewSchema);

let getAll = (cb) => {
    product.find()
        .then((data) => cb(data))
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

module.exports = { getAll };