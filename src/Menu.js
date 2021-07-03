import Story from './Story'
import Form from './Form'
import { storyData } from './storyData'

import './App.css';

/**
 * This is going to show the Menu for the dif stories (first page)
 * @param {Function} setActiveView sets the main view 
 * @returns 
 */
function Menu({ setActiveView }) {

    /**
     * TODO
     * @param {number} id 
     */
    const onCreate = (id) => {
        console.log("clicked",id)
        setActiveView(<Form setActiveView={setActiveView} id = {id}/>)

    }

    const storyComponents = storyData.map(item => <Story key={item.id} story={item} onClick={onCreate} />)
    return (
        <div class=" container choose-story-container">
            <h2>Choose a Mad Lib story below</h2>
            {storyComponents}
        </div>
    );
}

export default Menu;
