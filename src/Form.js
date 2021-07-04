import React, { useState } from "react"
import CompletedStory from "./CompletedStory"
import { storyConfig } from "./storyData"

const defaultLibMap = {
    a1: "",
    v1: "",
    p1: "",
    n1: ""
}
/**
 * Shows the Input form for a story
 * @param {Function} setActiveView sets the active view
 * @returns 
 */
function Form({setActiveView,id}) {
    let a1 = document.getElementById("a1")
    let v1 = document.getElementById("v1")
    let p1 = document.getElementById("p1")
    let n1 = document.getElementById("n1")


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
        if(a1.value == "" || v1.value == "" || p1.value == "" ||n1.value == ""){
            alert("Please fill out al input fields before continuing")
        }else{
            setActiveView(<CompletedStory id = {id} libMap = {libMap}/>)
        }
    }

    return ( 
            <div class="container form-container">
            
                <input id="a1"type="text" placeholder="adjective" onChange={handleInput}></input>
                <input id="v1"type="text" placeholder="verb" onChange={handleInput}></input>
                <input id="p1"type="text" placeholder="place" onChange={handleInput}></input>
                <input id="n1"type="text" placeholder="number" onChange={handleInput}></input>

                <button onClick={generateStory}>Generate</button>
            </div>
        
    )
}

export default Form