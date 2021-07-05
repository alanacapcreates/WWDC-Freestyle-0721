import React from "react"
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
 *  $P (2) = place
 *  $N = number
 *  $NM (2) = name
 *  $AM = animal
 *  $C = color
 *  $ADV = adverb
 *  $O (2) = object
 *  $DR = drink
 *  $D = device
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
  else if(arrStory[i] === "$P2"){
    arrStory[i] = libMap["p2"]
  }
  else if(arrStory[i] ==="$N1"){
    arrStory[i] = libMap["n1"]
  }
  else if(arrStory[i] ==="$N"){
    arrStory[i] = libMap["nm"]
  }
  else if(arrStory[i] ==="$N2"){
    arrStory[i] = libMap["nm2"]
  }
  else if(arrStory[i] ==="$AM"){
    arrStory[i] = libMap["am1"]
  }
  else if(arrStory[i] ==="$C"){
    arrStory[i] = libMap["c1"]
  }
  else if(arrStory[i] === "$ADV"){
    arrStory[i] = libMap["adv1"]
  }
  else if(arrStory[i] === "$O"){
    arrStory[i] = libMap["o1"]
  }
  else if(arrStory[i] === "$O2"){
    arrStory[i] = libMap["o2"]
  }
  else if(arrStory[i] === "$DR"){
    arrStory[i] = libMap["dr"]
  }
  else if(arrStory[i] === "$D"){
    arrStory[i] = libMap["d"]
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
