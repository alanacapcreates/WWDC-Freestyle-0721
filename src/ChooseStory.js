import React from "react"

function story1() {
    alert("clicked story 1")
}
function story2() {
    alert("clicked story 2")
}
function story3() {
    alert("clicked story 3")
}

function ChooseStory() {
    return (
        <div class=" container choose-story-container">
            <h2>Choose a Mad Lib story below</h2>
            <div>
                <h3>Story 1</h3>
                <p class = "story-desc">The description for this mad lib story will go here</p>
                <button onClick={story1}>Create Lib</button>
            </div>
            <div>
                <h3>Story 2</h3>
                <p class = "story-desc">The description for this mad lib story will go here</p>
                <button onClick={story2}>Create Lib</button>
            </div>
            <div>
                <h3>Story 3</h3>
                <p class = "story-desc">The description for this mad lib story will go here</p>
                <button onClick={story3}>Create Lib</button>
            </div>
        </div>
    )
}

export default ChooseStory