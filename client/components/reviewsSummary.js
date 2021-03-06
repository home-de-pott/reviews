import React from 'react';
import Graph from './ratingsGraph.js';
import RatingDisplayBlock from './ratingdisplayblock.js';
import CustomerImages from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/customerImages.js';

const ReviewsSummary = function(props) {
  return (
    <div className= "RVWScustomerSummaryContainer">
      <section className= "RVWScustomerSummary RVWSstarsAndGraph">
        <div className= "RVWSstarsAndAverage">

          <RatingDisplayBlock rating = {props.rating}/>

          {/* Displays stars, content in CSS */}
          <div className= "RVWSstarsContainer">
            <span className="RVWSstars"><span></span></span>
          </div>
          
          <div className= "RVWStotalReviews">{props.totalReviews} Reviews</div>
        
        </div>

        <div className= "RVWSratingsBreakdown">

          <Graph 
            ratingsBreakdown = {props.ratingsBreakdown}
          />
        </div>

      </section>
      <section className= "RVWScustomerSummary">
        <div className= "RVWSreviewSubmitAndCustImages">

          <div>
            <button onClick={() => props.toggleReviewForm()}>Write a Review</button>
          </div>

          <CustomerImages 
            reviews = {props.reviews}
            imageOnClick={props.imageOnClick}
          />

        </div>
      </section>  
    </div>
  )
}

export default ReviewsSummary;