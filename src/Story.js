import React from "react"

function handleClick(){
    alert("clicked")
}

function Story(props) {
    return ( 
            <div>
                <h3>{props.story.title}</h3>
                <p class = "story-desc">{props.story.description}</p>
                <button onClick={handleClick}>Create Lib</button>
            </div>
        
    )
}

export default Story