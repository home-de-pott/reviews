import React from 'react';
import RatingDisplayBlock from './ratingdisplayblock';
import Stars from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/stars.js';
import thumbsDown from '/Users/hh/Documents/Coding/hackReactor/reviews/dist/iconsAndBadges/thumbsDown.png';
import thumbsUp from '/Users/hh/Documents/Coding/hackReactor/reviews/dist/iconsAndBadges/thumbsUp.png';
import VerifiedOrRecommended from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/verifiedOrRecommended.js';
import ReviewImages from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/reviewImages.js'

const IndividualReview = function({reviews}) {
  let newAvg = 0;
  return (
    <div>
      { reviews
        ?
        reviews.map((review) => {
          newAvg += review.rating;
          return (
            <section className="bottomBorder">

              {/* headers */}
              <div className = "userName header">{review.userName}</div>
              <section className = "reviewContent">
                <span className = "header" style = {{ float: 'right', fontSize: '14px'}}>
                  {review.date}
                </span>
                <div className = "header">{review.header}</div>
                <section className = "ratingStatsContainer">

                  {/* rating stars, average, and verified or recommended checkmarks */}
                  <div className = "ratingStats">
                    <RatingDisplayBlock rating = {review.rating}/>
                    <div>
                      <Stars rating = {review.rating}/>
                      <VerifiedOrRecommended review = {review}/>
                    </div>
                  </div>
                </section>
                
                {/* review and images with helpfulness voting */}
                <p>{review.review}</p>
                <ReviewImages images = {review.images}/>
                <div className = "rankHelpful">
                  Was this review helpful? <img src = {thumbsUp}></img> {review.helpfulCount} <img src = {thumbsDown}></img> {review.notHelpfulCount}
                </div>
              </section>
            </section>
          )
        })
        :
        ''
      }
    </div>
  )
}

export default IndividualReview;