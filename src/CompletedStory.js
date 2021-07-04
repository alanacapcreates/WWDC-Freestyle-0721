import React,{useState} from "react"
import { storyConfig } from "./storyData";
import './App.css';

function refresh(){
  window.location.reload()
}

function CompletedStory({id, libMap}) {

const story = storyConfig[id].storyText
const arrStory = story.split(" ")
console.log(arrStory)

/**
 *  $A = adjective
 *  $V = verb
 *  $P = place
 *  $N = number
 */
console.log(libMap)
for(let i=0;i<arrStory.length;i++){
  if(arrStory[i] ==="$A"){
    arrStory[i] = libMap["a1"]
  }
  else if(arrStory[i] ==="$V"){
    arrStory[i] = libMap["v1"]
  }
  else if(arrStory[i] ==="$P"){
    arrStory[i] = libMap["p1"]
  }
  else if(arrStory[i] ==="$N"){
    arrStory[i] = libMap["n1"]
  }
}
let updatedStory = ""
  for(let i=0;i<arrStory.length;i++){
    updatedStory+=arrStory[i] + " "
  }

console.log(updatedStory)

return (
  <div>
    <div class="story-container">
      <p class="updatedStory">{updatedStory}</p>
    </div>
  <button onClick={refresh}>Start Over</button>
  </div>
  );
}

export default CompletedStory;
