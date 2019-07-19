import React from 'react';
import Slider from 'react-slick';
import Arrow from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/arrow.js';

const CustomerImages = (props) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: <Arrow />,
		nextArrow: <Arrow />,
		responsive: [
			{
				breakpoint: 1111,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true
				}
			}
		]
	}


	const images = [];
	if (props.reviews) {
		for (let i = 0; i < props.reviews.length; i++) {
			let custImages = props.reviews[i].images;
			for (let j = 0; j < custImages.length; j++) {
				images.push(custImages[j]);
			}
		}
	}

	return (
		<div id="RVWSCarousel" style={{ marginTop: '-15px'}}>
			<Slider {...settings}>
					{
						props.reviews 
						?
						images.map((imageURL, index) => {
							return (
								<span className= "RVWSreviewImageContainer" key = {imageURL}>
									<img 
										className="RVWScustomerReviewImages" 
									  src={imageURL} 
									  id={imageURL}
									  onClick={() => props.imageOnClick(event)}
									>
									</img>
								</span>
							)
						})
						:
						''
					}
			</Slider>
		</div>
	);
}

export default CustomerImages;
