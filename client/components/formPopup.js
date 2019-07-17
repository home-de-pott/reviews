import React from 'react';

const ReviewFormPopup = (props) => {
	return (
		<div className='RVWSpopup'>
			<div className='RVWSpopup_inner'>
				<div className= "RVWSbottomBorder" style = {{margin: '20px'}}>
				  <h1 style = {{fontWeight: 'initial', margin: '0'}}>Write A Review</h1>
				</div>
				<div>	
					<form style = {{padding: '20px'}}>
						<input type = "number"></input>
						<div>
							Would you recommend this product?
							<input type="radio" name="chooseone" value="true"><label for="true"> Yes</label>
							<input type="radio" name="chooseone" value="HTML"><label for="HTML"> HTML</label>
						</div>
						<p>Nickname</p>
						<input 
							type = "text" 
							placeholder = "Please do not use your own name, spaces, or special characters"
							style = {{width: '100%'}}
							required
						></input>
						<p>Product Review</p>
						<textarea 
							placeholder = "Example: This drill was easy to assemble, lightweight, and quiet. I'm really pleased with the battery life, and I was able to drill for over an hour of heavy use without having to charge it."
						  style = {{
								width: '100%',
								resize: 'none'
							}}
							required
						></textarea>
					</form>
					<section 
					  style={{ 
							float: 'right', 
							width: '33%', 
							backgroundColor: 'rgb(235, 235, 235)', 
							color: '#424242',
							fontSize: '12px',
							lineHeight: '1.5em',
							padding: '15px'
					}}>
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
				<button>Submit</button>
				<button onClick={props.toggleReviewForm}>Cancel</button>
			</div>
		</div>
	);
}

export default ReviewFormPopup;