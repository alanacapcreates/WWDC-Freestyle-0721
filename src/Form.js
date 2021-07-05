import React, { useState } from "react"
import CompletedStory from "./CompletedStory"
import { storyConfig } from "./storyData"

const defaultLibMap = {
    a1: "",
    v1: "",
    p1: "",
    p2: "",
    n1: "",
    nm: "",
    nm2: "",
    am1: "",
    c1: "",
    adv1: "",
    o1: "",
    o2: ""

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
    let p2 = document.getElementById("p2")
    let n1 = document.getElementById("n1")
    let nm = document.getElementById("nm")
    let nm2 = document.getElementById("nm2")
    let am1 = document.getElementById("am1")
    let c1 = document.getElementById("c1")
    let adv1 = document.getElementById("adv1")
    let o1 = document.getElementById("o1")
    let o2 = document.getElementById("o2")
    let dr = document.getElementById("dr")
    let d = document.getElementById("d")


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
        if(a1.value === "" || v1.value === "" || p1.value === "" || p2.value === "" || n1.value === "" || am1.value === "" || c1.value === "" || adv1.value === "" || o1.value === "" || o2.value === "" || nm.value === "" || nm2.value === "" || dr.value === "" || d.value === ""){
            alert("Please fill out all input fields before continuing")
        }else{
            setActiveView(<CompletedStory id = {id} libMap = {libMap}/>)
        }
    }

    return ( 
            <div class="container form-container">
                <h4>Fill out the following inputs for your mad lib story!</h4>
                <p class = "note"><em>**Note: Not all inputs will be used for the story selected, but fill them out anyway!!</em></p>
            <div class="split">
                <div class="flex-child">
                    <input id="a1"type="text" placeholder="adjective" onChange={handleInput}></input>
                    <input id="v1"type="text" placeholder="verb" onChange={handleInput}></input>
                    <input id="p1"type="text" placeholder="place" onChange={handleInput}></input>
                    <input id="p2"type="text" placeholder="place" onChange={handleInput}></input>
                    <input id="n1"type="text" placeholder="number" onChange={handleInput}></input>
                    <input id="nm"type="text" placeholder="name" onChange={handleInput}></input>
                    <input id="nm2"type="text" placeholder="name" onChange={handleInput}></input>
                </div>

                <div class="flex-child">
                    <input id="am1"type="text" placeholder="animal" onChange={handleInput}></input>
                    <input id="c1"type="text" placeholder="color" onChange={handleInput}></input>
                    <input id="adv1"type="text" placeholder="adverb" onChange={handleInput}></input>
                    <input id="o1"type="text" placeholder="object" onChange={handleInput}></input>
                    <input id="o2"type="text" placeholder="object" onChange={handleInput}></input>
                    <input id="dr"type="text" placeholder="drink" onChange={handleInput}></input>
                    <input id="d"type="text" placeholder="device" onChange={handleInput}></input>
                </div>
            </div>

                <button onClick={generateStory}>Generate</button>
            </div>
        
    )
}

export default Form