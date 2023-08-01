import { useState, useEffect } from 'react';
import axios from 'axios';
import GameForm from '../GameForm/GameForm';
import GameContainer from '../GameContainer/GameContainer';

// TO DO: POKEMON DETAILS BY NAME
// const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;

const App = () => {
  const NUM_ORIGINAL_POKEMON = 151;
  const BASE_API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${NUM_ORIGINAL_POKEMON}`;
  const BASE_IMG_URL = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world`;

  const [originalPokemon, setOriginalPokemon] = useState([]);
  const [cards, setCards] = useState([]);
  // const [error, setError] = useState(false);

  const clearCards = () => setCards([]);

  const getPokemonId = (pokemon) => {
    const regex = /pokemon\/(\d+)/;
    let regexMatch = pokemon.url.match(regex);
    let pokemonId = regexMatch[1];
    return parseInt(pokemonId);
  }

  // TO DO: cache for API call
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(BASE_API_URL);
        const pokemonData = res?.data?.results;

        let originalPokemonData = [];
        for (let pokemon of pokemonData) {
          let { name, url } = pokemon;
          let id = getPokemonId(pokemon);
          let imageUrl = `${BASE_IMG_URL}/${id}.svg`;
          let pokemonObj = {
            id,
            name,
            imageUrl,
            url,
          }
          originalPokemonData.push(pokemonObj);
        }
        setOriginalPokemon(originalPokemonData);

      } catch (err) {
        console.log(err);

        // TO DO: error handling
        // const message = err?.response?.data?.error?.message;
        // setError(message ?? String(err));
      }
    }
    fetchPokemon();
  }, [BASE_API_URL, BASE_IMG_URL]);

  return (
    <div className='App'>
      <div className='main-header-container'>
        <h1 id='main-header'>
          Matching Pokemon
        </h1>
      </div>
      <GameForm
        originalPokemon={originalPokemon}
        setCards={setCards}
        clearCards={clearCards}
      />
      <GameContainer
        cards={cards}
        clearCards={clearCards} />
    </div>
  );
}

export default App;
