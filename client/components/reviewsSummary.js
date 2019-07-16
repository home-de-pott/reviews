import React from 'react';
import Graph from './ratingsGraph.js';
import RatingDisplayBlock from './ratingdisplayblock.js';
import CustomerImages from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/customerImages.js';

const ReviewsSummary = function(props) {
  return (
    <div>
      <section className = "customerSummary">
        <div className = "starsAndAverage">

          <RatingDisplayBlock rating = {props.rating}/>

          <div className = "starsContainer">
            <span className ="stars"><span></span></span>
          </div>
          
          <div className = "totalReviews">{props.totalReviews} Reviews</div>
        
        </div>

        <div className = "ratingsBreakdown">
          <Graph ratingsBreakdown = {props.ratingsBreakdown}/>
        </div>
        
        <section>
          <div><button>Write a Review</button></div>
          <CustomerImages reviews = {props.reviews}/>
        </section>
      </section>
    </div>
  )
}

export default ReviewsSummary;