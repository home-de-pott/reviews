import React from 'react';
import Graph from './ratingsGraph.js';
import RatingDisplayBlock from './ratingdisplayblock.js';
import CustomerImages from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/customerImages.js';

const ReviewsSummary = function(props) {
  return (
    <div className = "customerSummaryContainer">
      <section className = "customerSummary starsAndGraph">
        <div className = "starsAndAverage">

          <RatingDisplayBlock rating = {props.rating}/>

          <div className = "starsContainer">
            <span className ="stars"><span></span></span>
          </div>
          
          <div className = "totalReviews">{props.totalReviews} Reviews</div>
        
        </div>

        <div className = "ratingsBreakdown">
          <Graph 
            ratingsBreakdown = {props.ratingsBreakdown}
          />
        </div>
      </section>
      <section className = "customerSummary">
        <div className = "reviewSubmitAndCustImages">
          <div><button>Write a Review</button></div>
          <h4 style = {{marginBottom: '1px'}}>Customer Images</h4>
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