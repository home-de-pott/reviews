import React from 'react';

const VerifiedOrRecommended = ({review}) => {
    // If verified purchase or recommended purchase,
    // display checkbox and coordinating statement
    // next to rating
    return (
        <div className="RVWSconditionalChecks">
            {review.recommend
                ?
                <div>
                    <img src='http://ec2-3-130-129-220.us-east-2.compute.amazonaws.com/iconsAndBadges/checkbox.png'>
                    </img> Recommended Product
                            </div>
                :
                ''
            }
            {review.verifiedPurchase
                ?
                <div>
                    <img src='http://homedepottreviews.us-east-2.elasticbeanstalk.com/iconsAndBadges/checkbox.png'>
                    </img> Verified Purchase
                            </div>
                :
                ''
            }
        </div>
    )
}

export default VerifiedOrRecommended;