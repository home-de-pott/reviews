import React from 'react';
//npm install dotenv --save-dev

/*
Display 8 at a time
Reviews object:
  username: "sheila",
  date: new Date() or whatevs,
  header: header provided, else rating given
  review: "it's a keeper",
  rating: 4,
  verifiedPurchase: true,
  helpfulCount: 0,
  notHelpfulCount: 0
*/

const reviews = [
                {
                    userName: 'Sheila',
                    date: new Date(),
                    header: 'Great father\'s day gift',
                    review: 'Comfortable grip, definitely durable, very handy to have the magnet for the nail on top so you can hold the piece your nailing and hammer.',
                    rating: 4,
                    verifiedPurchase: true,
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
                    helpfulCount: 0,
                    notHelpfulCount: 0
                }
            ]
const IndividualReview = function(props) {
        return (
            <div>
                {
                    reviews.map((review) =>
                        <div className="fullReviewContainer">
                            <div>
                                {review.userName}
                            </div>
                            <div>
                                <span>{review.rating} </span>{review.header}
                            </div>
                            <p>{review.review}</p>
                        </div>
                    )
                }
            </div>
        )
    }

export default IndividualReview;