import React from 'react';
import background from '/Users/hh/Documents/Coding/hackReactor/reviews/dist/iconsAndBadges/avgRatingBackground.gif';
import Graph from './ratingsGraph.js';

const ReviewsSummary = function(props) {
  // make ratingSummary own component
  return (
    <div className = "customerSummary">
      <div className = "starsAndAverage">
        <div className = "ratingSummary"
          style={{
            backgroundImage: 'url(' + background + ')',
            backgroundSize: '115px 125px',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
          }}
        >
          {props.avg}
          <div style = {{
            fontSize: '16px',
            color: '#ffffff',
            paddingTop: '16px',
            fontWeight: 'lighter'
          }}>out of 5</div>
        </div>
        <div className = "starsContainer">
          <span className ="stars"><span></span></span>
        </div>
      </div>
      <div className = "ratingsBreakdown">
        <Graph ratingsBreakdown = {props.ratingsBreakdown}/>
      </div>
    </div>
  )
}

export default ReviewsSummary;