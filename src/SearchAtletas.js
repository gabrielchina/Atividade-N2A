import React, { useState } from 'react';
import CardAtleta from './CardAtleta';

function SearchAtletas({ adicionarAosFavoritos }) {
  const [atletas, setAtletas] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch('https://hltv-api.vercel.app/api/player.json');
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      const data = await response.json();
      const filteredAtletas = data.filter((team) =>
        team.players.some((player) =>
          player.nickname.toLowerCase().includes(query.toLowerCase())
        )
      );

      const matchedPlayers = filteredAtletas.flatMap((team) =>
        team.players.filter((player) =>
          player.nickname.toLowerCase().includes(query.toLowerCase())
        ).map((player) => ({
          ...player,
          teamName: team.name,
          teamLogo: team.logo,
        }))
      );

      setAtletas(matchedPlayers);
    } catch (error) {
      console.error('Erro ao buscar atletas:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar atletas"
      />
      <button onClick={handleSearch}>Buscar</button>
      
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      
      <ul>
        {atletas.map((atleta, index) => (
          <li key={index}>
            <CardAtleta atleta={atleta} adicionarAosFavoritos={adicionarAosFavoritos} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchAtletas;
