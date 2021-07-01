import React from "react"

function handleClick() {
    alert("clicked story 1")
}

function ChooseStory() {
    return (
        <div class=" container choose-story-container">
            <h2>Choose a Mad Lib story below</h2>
            <div>
                <h3>Story 1</h3>
                <button onClick={handleClick}>Create Lib</button>
            </div>
            <div>
                <h3>Story 2</h3>
                <button>Create Lib</button>
            </div>
            <div>
                <h3>Story 3</h3>
                <button>Create Lib</button>
            </div>
        </div>
    )
}

export default ChooseStory