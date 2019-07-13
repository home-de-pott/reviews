import React from 'react';
import RatingDisplayBlock from './ratingdisplayblock';

const IndividualReview = function({reviews}) {
  let newAvg = 0;
  return (
    <div>
      {
        reviews.map((review) => {
          newAvg += review.rating;
          return (
            <section className="bottomBorder">
              <div className = "userName header">{review.userName}</div>
              <section className = "reviewContent">
                <span className = "header" style = {{ float: 'right', fontSize: '14px'}}>
                  {review.date}
                </span>
                <div className = "header">{review.header}</div>
                <section className = "ratingStatsContainer">
                  <div className = "ratingStats">
                    <RatingDisplayBlock rating = {review.rating}/>
                    <div className="stars">
                      <span
                        style = {{
                          width: (review.rating / 5) * 100 + "%"
                        }}>
                      </span>
                    </div>
                  </div>
                </section>
                <p>{review.review}</p>
              </section>
            </section>
          )
        })
      }
    </div>
  )
}

export default IndividualReview;