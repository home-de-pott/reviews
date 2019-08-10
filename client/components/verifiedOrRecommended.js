import React from 'react';
import checkbox from '/Users/hh/Documents/Coding/hackReactor/reviews/dist/images/checkbox.png';

const VerifiedOrRecommended = ({review}) => {
    // If verified purchase or recommended purchase,
    // display checkbox and coordinating statement
    // next to rating
    return (
        <div className="RVWSconditionalChecks">
            {review.recommend
                ?
                <div>
                    <img src= {checkbox}>
                    </img> Recommended Product
                </div>
                :
                ''
            }
            {review.verifiedPurchase
                ?
                <div>
                    <img src={checkbox}>
                    </img> Verified Purchase
                            </div>
                :
                ''
            }
        </div>
    )
}

export default VerifiedOrRecommended;