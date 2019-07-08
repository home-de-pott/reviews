import React from 'react';
import IndividualReview from './individualReview.js';

// consider axing fullreviews component


class FullReviews extends React.Component {
  constructor(props) {
        super(props);
  }
    
    render() {
        return (
            <div>
              <IndividualReview reviews = {this.props.reviews}/>
            </div>
        )
    }
}

export default FullReviews;