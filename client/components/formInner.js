import React from 'react';

const FormInner = ({ reviewFormChange }) => {
    return (
        <form>
            <div style={{ fontSize: "1.1em", paddingTop: "20px" }}>
                Would you recommend this product?
				<span style={{ padding: '5px' }}>
                    <input onChange={(newVal) => reviewFormChange("recommend", newVal.target.value)} type="radio" name="chooseone" value="true"></input>
                    <label> 
                        Yes 
                    </label>
                    <input onChange={(newVal) => reviewFormChange("recommend", newVal.target.value)} type="radio" name="chooseone" value="false"></input>
                    <label> 
                        No
                    </label>
                </span>
            </div>
            <p style={{ fontSize: "1.25em" }}>
                Nickname
			</p>
                <input
                    onChange={(newVal) => reviewFormChange("userName", newVal.target.value)}
                    type="text"
                    placeholder="Please do not use your own name, spaces, or special characters"
                    style={{ width: '100%' }}
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
            <p style={{ fontSize: "1.25em" }}>
                Product Review
			</p>
                <textarea
                    className="RVWSreviewTextArea"
                    onChange={(newVal) => reviewFormChange("review", newVal.target.value)}
                    placeholder="Example: This drill was easy to assemble, lightweight, and quiet. I'm really pleased with the battery life, and I was able to drill for over an hour of heavy use without having to charge it."
                    style={{ resize: 'none' }}
                ></textarea>
        </form>
    )
}

export default FormInner;