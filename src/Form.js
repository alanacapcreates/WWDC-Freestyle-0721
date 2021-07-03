import React, { useState } from "react"
import CompletedStory from "./CompletedStory"
import { storyConfig } from "./storyData"

const defaultLibMap = {
    v1: "",
    c1: "",
    p1: "",
    n1: ""
}
/**
 * Shows the Input form for a story
 * @param {Function} setActiveView sets the active view
 * @returns 
 */
function Form({setActiveView,id}) {

    const [libMap, setLibMap] = useState(defaultLibMap)
    console.log(libMap)

    const handleInput=(event) => {
        setLibMap({
            ...libMap,
            [event.target.id]:event.target.value
        })

        //console.log("ID: " + event.target.id + " Value: " + event.target.value)
    }
    const generateStory = () => {
        setActiveView(<CompletedStory id = {id}/>)
    }

    return ( 
            <div class="form-container">
            
                <input id="v1"type="text" placeholder="verb" onChange={handleInput}></input>
                <input id="c1"type="text" placeholder="color" onChange={handleInput}></input>
                <input id="p1"type="text" placeholder="place" onChange={handleInput}></input>
                <input id="n1"type="text" placeholder="name" onChange={handleInput}></input>

                <button onClick={generateStory}>Generate</button>
            </div>
        
    )
}

export default Form