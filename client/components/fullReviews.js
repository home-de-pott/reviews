import React from 'react';
import IndividualReview from './individualReview.js';

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

class FullReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [
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
        }
    }
    render() {
        return (
            <div>
              {
                this.state.reviews.map((review) => 
                  <div className = "fullReviewContainer">
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
}

export default FullReviews;