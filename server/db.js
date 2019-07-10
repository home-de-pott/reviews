const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
// mvp: users can post/read reviews
//  each product is stored by id?
//  override default id with product id
//  db.yourcollection.insert({_id:"myuniquevalueN",a:1,b:1})
//  each id points to an array of review schemas?
// next: sort reviews by criteria
// next: add pictures from reviews
// next: upvote or downvote and flag reviews
// next: authentication to make review

mongoose.connect('mongodb+srv://hmhendrycks:Kgb9yum*@projectdb-devxk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }); 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected mofo");
    const UserReviewSchema = new mongoose.Schema({
        userName: String,
        date: String,
        header: String,
        review: String,
        rating: Number,
        verifiedPurchase: Boolean,
        recommend: Boolean,
        helpfulCount: Number,
        notHelpfulCount: Number
    });
    const ProductReviewSchema = new mongoose.Schema({
        id: String,
        reviews: [UserReviewSchema]
    });
    const product = mongoose.model('Reviews', ProductReviewSchema);
});
