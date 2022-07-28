import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Cards } from './components/Cards';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [characterId, setCharacterId] = useState(1);

  const getCharacter = async () => {
    setIsLoading(true);

    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacters(data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacterId = (id) => {
    setCharacterId(id);
  };

  const getCharacterById = async () => {
    setIsLoading(true);

    const { data } = await axios(`https://rickandmortyapi.com/api/character/${characterId}`);
    console.log(data);

    setIsLoading(false);
  };

  useEffect(() => {
    getCharacterById();
  }, [characterId]);

  return (
    <div className="App">
       { isLoading && <p>Loading...</p> }
      { characters?.map(character => (
        <Cards
          character={character}
          key={character.id}
          getCharacterId={getCharacterId}
          />))}
    </div>
  );
};

export default App;
