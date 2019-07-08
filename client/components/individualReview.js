import React from 'react';
//npm install dotenv --save-dev
/*
Customer Reviews
___________________div_______________________
_______div1_________|__________div2__________
__div3__|___div4____|________span btn________
_______div5_________|_________div8___________
      (div6)        |  Customer Pics   Pg 1/2
      (div7)        |        carousel
*/

const IndividualReview = function({reviews}) {
  let newAvg = 0;
  return (
    <div>
      {
        reviews.map((review) => {
          newAvg += review.rating;
          return (
            <div>
              <div>{review.userName}</div>
              <div>
                <span>{review.rating}</span>
                {review.header}
              </div>
              <p>{review.review}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default IndividualReview;