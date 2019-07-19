import React from 'react'

const Stars = ({rating}) => {
    // Two layers of stars, colored layer has
    // a width determined by the rating
    return (
        <div className="RVWSstars">
            <span
                style={{
                    width: (rating / 5) * 100 + "%"
                }}>
            </span>
        </div>
    )
}

export default Stars;