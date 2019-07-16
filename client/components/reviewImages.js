import React from 'react';


const ReviewImages = ({images, imageOnClick}) => {

    return (
        <section>
            {images.length > 0
                ?
                images.map((imageURL, index) =>
                    <img 
                      key = {imageURL + index}
                      id={"individualReviewImg" + imageURL}
                      src={imageURL} 
                      style={{ width: '78px', height: '78px', float: 'left', border: 'solid #7d7d7d 3px' }}
                      onClick={() => imageOnClick(event)}
                    >
                    </img>
                )
                :
                ''
            }
        </section>
    )
}

export default ReviewImages;