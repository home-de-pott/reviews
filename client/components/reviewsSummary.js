import React from 'react';
import background from '/Users/hh/Documents/Coding/hackReactor/reviews/dist/iconsAndBadges/avgRatingBackground.gif';
const ReviewsSummary = function(props) {
  return (
    <div className = "customerSummary">
      <div className = "ratingSummary"
        style={{
          backgroundImage: 'url(' + background + ')',
          backgroundSize: '115px 115px',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        }}
      >
        {props.avg}
      </div>
      <div>
      </div>
    </div>
  )
}

export default ReviewsSummary;