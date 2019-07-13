import React from 'react';

const IndividualReview = function({reviews}) {
  let newAvg = 0;
  return (
    <div>
      {
        reviews.map((review) => {
          newAvg += review.rating;
          return (
            <div>
              <div>{review.userName}</div>
              <div>
                <span>{review.rating}</span>
                {review.header}
              </div>
              <p>{review.review}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default IndividualReview;