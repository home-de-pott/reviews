import React from 'react';
import checkBox from 'http://ec2-18-219-134-212.us-east-2.compute.amazonaws.com/dist/iconsAndBadges/checkbox.png';

const VerifiedOrRecommended = ({review}) => {
    return (
        <div className="RVWSconditionalChecks">
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