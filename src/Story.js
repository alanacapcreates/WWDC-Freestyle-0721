import React from "react"

function handleClick(){
    
}

function Story({story, id, onClick}) {

    return ( 
            <div>
                <h3>{story.title}</h3>
                <p class = "story-desc">{story.description}</p>
                <button onClick={() => onClick(story.id)}>Create Lib</button>
            </div>
        
    )
}

export default Story