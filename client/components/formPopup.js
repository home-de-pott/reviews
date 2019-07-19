import React from 'react';
import ReactStars from 'react-stars'

// onclick func passed down which makes an axios post
// request then updates average

const ReviewFormPopup = (props) => {
	let newReview = {
		userName: "", review: "", recommend: true, header: "", rating: 5
	};
	const reviewFormChange = (field, newVal) => {
		newReview[field] = newVal;
	}
	return (
		<div className='RVWSpopup'>
			<div className='RVWSpopup_inner'>
				<div className= "RVWSbottomBorder" style = {{margin: '20px'}}>
				  <h1 style = {{fontWeight: 'initial', margin: '0'}}>Write A Review</h1>
				</div>
				<div className="RVWSbottomBorder" style={{ padding: '0px 20px 20px 20px' }}>	
					<ReactStars
						onChange={(newVal) => reviewFormChange("rating", newVal)}
						count={5}
						size={24}
						value={5}
						half={false}
						color2={'#f96302'} 
						style = {{paddingBottom: "5px"}}
					/>
					<form>
						<div style = {{fontSize: "1.1em", paddingTop: "20px"}}>
							Would you recommend this product?
							<span style={{ padding: '5px' }}> 
								<input onChange={(newVal) => reviewFormChange("recommend", newVal.target.value)} type="radio" name="chooseone" value="true"></input>
									<label> Yes </label> 
								<input onChange={(newVal) => reviewFormChange("recommend", newVal.target.value)} type="radio" name="chooseone" value="false"></input>
									<label> No</label>
							</span>
						</div>
						<p style = {{fontSize: "1.25em"}}>
						    Nickname
						</p>
						<input 
							onChange={(newVal) => reviewFormChange("userName", newVal.target.value)}
							type = "text" 
							placeholder = "Please do not use your own name, spaces, or special characters"
							style = {{width: '100%'}}
						></input>
						<p style={{ fontSize: "1.25em" }}>
						    Review Title
						</p>
						<input
							onChange={(newVal) => reviewFormChange("header", newVal.target.value)}
							type="text"
							placeholder="Example: Easy to use, good battery life"
							style={{ width: '100%' }}
						></input>
						<p style = {{fontSize: "1.25em"}}>
						    Product Review
						</p>
						<textarea
								className= "RVWSreviewTextArea"
								onChange={(newVal) => reviewFormChange("review", newVal.target.value)}
								placeholder = "Example: This drill was easy to assemble, lightweight, and quiet. I'm really pleased with the battery life, and I was able to drill for over an hour of heavy use without having to charge it."
								style = {{ resize: 'none'}}
							></textarea>
						
					</form>
					<section className = "RVWSguidelines">
						<h5
						  style = {{
								display: 'block',
								fontSize: '1em',
								marginBlockStart: '1.67em',
								marginBlockEnd: '1.67em',
								marginInlineStart: '0px',
								marginInlineEnd: '0px',
								fontWeight: 'bold',
								margin: '0'
							}}
						>
							Review Guidelines
						</h5>
						<p style={{ margin: '5px 0px 0px 0px'}}>Focus on the product and your individual experience with it:</p>
						<ul style = {{margin: '0', paddingLeft: '18px'}}>
							<li>For Shipping / Damaged / Delivery item issue, click on Feedback Tab, click on Website Feedback, click on Feedback topic, click on Shipping/Delivery, add your Feedback, or contact us at 1-800-430-3376, do not post on product review</li>
							<li>What features stand out most?</li>
							<li>What do you like or dislike about it?</li>
							<li>How long have you had it?</li>
							<li>Does it meet your expectations?</li>
						</ul>
					</section>
				</div>
				<div style = {{ textAlign: "center"}}>
					<button onClick={() => {
						const id = window.location.pathname.slice(10);
						props.submitReviewForm(id, newReview);
						props.toggleReviewForm();
					}}>
					    Submit
					</button>
					<button onClick={props.toggleReviewForm}>
					    Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

export default ReviewFormPopup;