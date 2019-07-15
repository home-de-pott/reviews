import React from 'react';
import checkBox from '/Users/hh/Documents/Coding/hackReactor/reviews/dist/iconsAndBadges/checkbox.png';

const VerifiedOrRecommended = ({review}) => {
    return (
        <div className="conditionalChecks">
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
                    <img src={checkBox}></img> Verified Purchase
                            </div>
                :
                ''
            }
        </div>
    )
}

export default VerifiedOrRecommended;