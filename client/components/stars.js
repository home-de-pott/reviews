import React from 'react'

const Stars = ({rating}) => {
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