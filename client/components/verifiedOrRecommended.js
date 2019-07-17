import React from 'react';
// import checkBox from 'http://ec2-18-219-134-212.us-east-2.compute.amazonaws.com/dist/iconsAndBadges/checkbox.png';

const VerifiedOrRecommended = ({review}) => {
    return (
        <div className="RVWSconditionalChecks">
            {review.recommend
                ?
                <div>
                    <img src='http://ec2-18-219-134-212.us-east-2.compute.amazonaws.com/iconsAndBadges/checkbox.png'>
                    </img> Recommended Product
                            </div>
                :
                ''
            }
            {review.verifiedPurchase
                ?
                <div>
                    <img src='http://ec2-18-219-134-212.us-east-2.compute.amazonaws.com/iconsAndBadges/checkbox.png'>
                    </img> Verified Purchase
                            </div>
                :
                ''
            }
        </div>
    )
}

export default VerifiedOrRecommended;