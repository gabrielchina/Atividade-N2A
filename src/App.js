// App.js
import React, { useState } from 'react';
import './App.css';
import SearchAtletas from './SearchAtletas';
import JogadoresFavoritos from './JogadoresFavoritos';

function App() {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarAosFavoritos = (atleta) => {
    setFavoritos([...favoritos, atleta]);
  }

  return (
    <div className="App">
      <h1>Pesquisar Jogadores de Cs2</h1>
      <SearchAtletas adicionarAosFavoritos={adicionarAosFavoritos} />
      <JogadoresFavoritos favoritos={favoritos} />
    </div>
  );
}

export default App;
