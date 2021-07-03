import Intro from './Intro'
import Story from './Story'
import storyData from './storyData'

import './App.css';

function App() {
  const storyComponents = storyData.map(item => <Story key ={item.id} story={item}/>)
  return (
    <div>
      <Intro />
      <div class=" container choose-story-container">
            <h2>Choose a Mad Lib story below</h2>
            {storyComponents}
      </div>
    </div>
  );
}

export default App;
