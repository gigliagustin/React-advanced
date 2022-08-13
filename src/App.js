import { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios';
import { Cards } from './components/Cards';
import useFetch from './hooks/CustomFetch/useFetch';

const App = () => {
  const [characterId, setCharacterId] = useState(1);
  const { data, loading } = useFetch('https://rickandmortyapi.com/api/character');

  const getCharacterId = (id) => {
    setCharacterId(id);
  };
  const getCharacterById = () => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(resp => resp.json())
      .then(json => console.log(json));
  };

  useEffect(() => {
    getCharacterById();
    console.log(characterId);
  }, [characterId]);
  return (
    <div className="App">
       { loading && <p>Loading...</p> }
      { data?.map(character => (
        <Cards
          character={character}
          key={character.id}
          getCharacterId={getCharacterId}
          />))}
    </div>
  );
};

export default App;
