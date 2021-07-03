import Intro from './Intro'
import Menu from './Menu'
import Form from './Form'
import Story from './Story'
import storyData from './storyData'
import React,{useState, useEffect} from "react"
import './App.css';

function App() {
  const [activeView,setActiveView] = useState()
  useEffect(() =>{
    setActiveView(<Menu setActiveView={setActiveView}/>)
  },[]) 

  return (
    <div>
      <Intro />
      {/* <Menu /> */}
      {activeView}
    </div>
  );
}

export default App;
