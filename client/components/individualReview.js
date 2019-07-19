import React from 'react';
import RatingDisplayBlock from './ratingdisplayblock';
import Stars from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/stars.js';
import VerifiedOrRecommended from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/verifiedOrRecommended.js';
import ReviewImages from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/reviewImages.js'

const IndividualReview = function({reviews, imageOnClick}) {
  let newAvg = 0;
  return (
    <div>
      { reviews
        ?
        reviews.map((review, index) => {
          newAvg += review.rating;
          return (
            <section className="RVWSbottomBorder" key = {review.userName + index}>

              {/* headers */}
              <div className= "RVWSuserName RVWSheader">{review.userName}</div>
              <section className= "RVWSreviewContent">
                <span className= "RVWSheader" style = {{ float: 'right', fontSize: '14px'}}>
                  {review.date}
                </span>
                <div className= "RVWSheader">{review.header}</div>
                <section className= "RVWSratingStatsContainer">

                  {/* rating stars, average, and verified or recommended checkmarks */}
                  <div className= "RVWSratingStats">
                    <RatingDisplayBlock rating = {review.rating}/>
                    <div className = "RVWstarsAndCheckbox">
                      <Stars rating = {review.rating}/>
                      <VerifiedOrRecommended review = {review}/>
                    </div>
                  </div>
                </section>
                
                {/* review and images with helpfulness voting */}
                <p>{review.review}</p>
                <ReviewImages 
                  images = {review.images}
                  imageOnClick = {imageOnClick}
                />
                <div className= "RVWSrankHelpful">
                  Was this review helpful? <img src='http://homedepottreviews.us-east-2.elasticbeanstalk.com/iconsAndBadges/thumbsUp.png'></img> {review.helpfulCount} <img src='http://ec2-3-130-129-220.us-east-2.compute.amazonaws.com/iconsAndBadges/thumbsDown.png'></img> {review.notHelpfulCount}
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