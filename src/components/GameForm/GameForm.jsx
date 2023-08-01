/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const GameForm = ({ setCards, clearCards }) => {
  const DEFAULT_NUM_MATCHES = 10;
  const DEFAULT_NUM_CARDS_MATCH = 2;

  const INITIAL_FORM_DATA = { numPairs: DEFAULT_NUM_MATCHES };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const generateMatch = (numCardsMatch) => {
    let numCard = 1;
    while (numCard <= numCardsMatch) {
      let newCard = { id: uuidv4() };
      setCards((prevCards) => [...prevCards, newCard]);
      numCard++;
    }
  }

  const generateCards = (numMatches) => {
    let numPair = 1;
    while (numPair <= numMatches) {
      generateMatch(DEFAULT_NUM_CARDS_MATCH);
      numPair++;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    clearCards();
    generateCards(formData.numPairs);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  return (
    <div className='GameForm'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numPairs">Number of Matches:</label>
        <input
          type="number"
          name="numPairs"
          value={formData.numPairs}
          onChange={handleChange}
        />
        <button>
          Create
        </button>
      </form>
    </div >
  );
}

export default GameForm;
