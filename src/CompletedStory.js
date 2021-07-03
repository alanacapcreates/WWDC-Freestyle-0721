import React,{useState} from "react"
import { storyConfig } from "./storyData";
import './App.css';

function CompletedStory({id}) {

  return (
    <div>
      <h3>{storyConfig[id].storyText}</h3>
    </div>
  );
}

export default CompletedStory;
