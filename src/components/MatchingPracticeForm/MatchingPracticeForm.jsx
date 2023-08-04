/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MatchingPracticeForm = ({ originalPokemon, setCards, clearCards }) => {
  const DEFAULT_NUM_MATCHES = 1;
  const DEFAULT_NUM_CARDS_MATCH = 2;

  const INITIAL_FORM_DATA = {
    numCardsMatch: DEFAULT_NUM_CARDS_MATCH,
    numMatches: DEFAULT_NUM_MATCHES,
  };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // https://medium.com/@will.software.engineer/generate-an-array-of-unique-non-repeating-elements-in-javascript-992b585da29a
  const getRandomPokemon = (numMatches) => {
    let originalPokemonCopy = [...originalPokemon];
    let randomPokemon = [];
    for (let i = 0; i < numMatches; i++) {
      let randNum = Math.floor(Math.random() * originalPokemonCopy.length);
      let splicedPokemon = originalPokemonCopy.splice(randNum, 1)[0];
      randomPokemon.push(splicedPokemon);
    }

    return randomPokemon;
  }

  const generateCards = (randomPokemon, numCardsMatch) => {
    for (let pokemon of randomPokemon) {
      for (let j = 0; j < numCardsMatch; j++) {
        let newCard = {
          id: uuidv4(),
          pokemonId: pokemon.id,
          name: pokemon.name,
          imageUrl: pokemon.imageUrl,
        };
        setCards((prevCards) => [...prevCards, newCard]);
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    clearCards();
    const { numCardsMatch, numMatches } = formData;
    const randomPokemon = getRandomPokemon(numMatches);
    generateCards(randomPokemon, numCardsMatch);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  console.log({ formData });

  return (
    <div className='MatchingPracticeForm'>
      <form onSubmit={handleSubmit} >
        <label htmlFor="numCardsMatch">numCardsMatch:</label>
        <input
          type="number"
          name="numCardsMatch"
          value={formData.numCardsMatch}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="numMatches">numMatches:</label>
        <input
          type="number"
          name="numMatches"
          value={formData.numMatches}
          onChange={handleChange}
        />
        <br />
        <button>
          Create
        </button>
      </form>
    </div >
  );
}

export default MatchingPracticeForm;
