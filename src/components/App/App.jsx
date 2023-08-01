import { useState, useEffect } from 'react';
import axios from 'axios';
import GameForm from '../GameForm/GameForm';
import GameContainer from '../GameContainer/GameContainer';

const App = () => {
  const NUM_ORIGINAL_POKEMON = 151;

  const [pokemon, setPokemon] = useState([]);
  const [cards, setCards] = useState([]);
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(false)

  const clearCards = () => setCards([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      setIsFetching(true)
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${NUM_ORIGINAL_POKEMON}`);
        const pokemonData = res?.data?.results;
        // console.log(pokemonData);

        // TO DO: GENERATE IMAGES
        // const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;

        if (res?.data?.results) {
          setPokemon(pokemonData);
        } else {
          setError("Error - problem fetching Pokemon data");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    }
    fetchPokemon();
  }, []);

  console.log(pokemon);

  return (
    <div className='App'>
      <div className='main-header-container'>
        <h1 id='main-header'>
          Matching Pokemon
        </h1>
      </div>
      <GameForm setCards={setCards} clearCards={clearCards} />
      <GameContainer cards={cards} clearCards={clearCards} />
    </div>
  );
}

export default App;
