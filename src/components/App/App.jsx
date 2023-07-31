import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GameForm from '../GameForm/GameForm';
import GameContainer from '../GameContainer/GameContainer';

const App = () => {
  const [cards, setCards] = useState([]);

  const generatePairs = (numPairs) => {
    let numPair = 1;
    while (numPair <= numPairs) {
      let newPair = { id: uuidv4() }
      setCards((prevCards) => [...prevCards, newPair]);
      numPair++;
    }
  }

  return (
    <div className='App'>
      <div className='main-header-container'>
        <h1 id='main-header'>
          Matching Pokemon
        </h1>
      </div>
      <GameForm generatePairs={generatePairs} />
      <GameContainer cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
