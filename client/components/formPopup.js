import React from 'react';

const ReviewFormPopup = (props) => {
	return (
			<div className='popup'>
					<div className='popup_inner'>
							<h1 style = {{fontWeight: 'initial'}}>Write A Review</h1>
							<button>Submit</button>
							<button onClick={props.toggleReviewForm}>Cancel</button>
					</div>
			</div>
	);
}

export default ReviewFormPopup;