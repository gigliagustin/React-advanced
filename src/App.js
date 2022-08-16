import { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './components/Cards';
import Header from './components/Header/Header';
import useFetch from './hooks/CustomFetch/useFetch';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
  const [characterId, setCharacterId] = useState(1);
  const { data, loading } = useFetch('https://rickandmortyapi.com/api/character');
  const dataCharacterId = useFetch(`https://rickandmortyapi.com/api/character/${characterId}`);

  const getCharacterId = (id) => {
    setCharacterId(id);
  };
  const getCharacterById = () => {
    console.log(dataCharacterId);
  };

  useEffect(() => {
    getCharacterById();
    console.log(characterId);
  }, [characterId]);
  return (
    <ThemeProvider>
      <Header />
      <div className="App">
        { loading && <p>Loading...</p> }
        { data?.results.map(character => (
          <Cards
            character={character}
            key={character.id}
            getCharacterId={getCharacterId}
            />))}
      </div>
    </ThemeProvider>
  );
};

export default App;
