import React from 'react';

const ReviewFormPopup = (props) => {
	return (
		<div className='RVWSpopup'>
			<div className='RVWSpopup_inner'>
							<h1 style = {{fontWeight: 'initial'}}>Write A Review</h1>
							<button>Submit</button>
							<button onClick={props.toggleReviewForm}>Cancel</button>
					</div>
			</div>
	);
}

export default ReviewFormPopup;