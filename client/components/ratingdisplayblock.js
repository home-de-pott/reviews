import React from 'react';
import background from '/Users/hh/Documents/Coding/hackReactor/reviews/dist/iconsAndBadges/avgRatingBackground.gif';

const RatingDisplayBlock = (props) => {
	  const rating = Number.parseFloat(props.rating).toFixed(1);
    return (
        <div className="ratingSummary"
            style={{
                backgroundImage: 'url(' + 'http://ec2-18-219-134-212.us-east-2.compute.amazonaws.com/iconsAndBadges/avgRatingBackground.gif' + ')',
                backgroundSize: '115px 125px',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}
        >
				{rating}
            <div style={{
                fontSize: '16px',
                color: '#ffffff',
                paddingTop: '16px',
                fontWeight: 'lighter'
            }}>out of 5</div>
        </div>
    )
}

export default RatingDisplayBlock;