import React from 'react';


const ReviewImages = ({images}) => {
    return (
        <section>
            {
                images.map((imageURL) =>
                    <img src={imageURL} style={{ width: '78px', height: '78px', float: 'left', border: 'solid #7d7d7d 3px' }}></img>
                )
            }
        </section>
    )
}

export default ReviewImages;