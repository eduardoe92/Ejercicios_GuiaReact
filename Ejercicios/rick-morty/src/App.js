import titleRickMorty from './img/RM_logo.png';
import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={titleRickMorty} alt="Rick & Morty" className="img-title" />
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button
              onClick={reqApi}
              className="btn-search">
              <strong> Buscar Personajes </strong>
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
