import React from 'react';
import Slider from 'react-slick';
import Arrow from '/Users/hh/Documents/Coding/hackReactor/reviews/client/components/arrow.js';

const CustomerImages = (props) => {
	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true
		// prevArrow: <Arrow />,
		// nextArrow: <Arrow />,
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
			<Slider {...settings}>
					{
						props.reviews 
						?
						images.map((imageURL) => {
							return (
								<div>
									<img src = {imageURL}></img>
								</div>
							)
						})
						:
						''
					}
			</Slider>
	);
}

export default CustomerImages;
