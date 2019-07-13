import React from 'react';
import RatingDisplayBlock from './ratingdisplayblock';
import checkBox from '/Users/hh/Documents/Coding/hackReactor/reviews/dist/iconsAndBadges/checkbox.png';

// shrink component, break into smaller pieces

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
                    <div>
                      <div className="stars">
                        <span
                          style = {{
                            width: (review.rating / 5) * 100 + "%"
                          }}>
                        </span>
                      </div>
                      <div className = "conditionalChecks">
                      {review.recommend 
                        ? 
                        <div>
                          <img src={checkBox}></img> Recommended Product
                        </div>
                        :
                        ''
                      }
                      {review.verifiedPurchase
                        ?
                        <div>
                          <img src = {checkBox}></img> Verified Purchase
                        </div>
                        :
                        ''
                      }
                      </div>
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