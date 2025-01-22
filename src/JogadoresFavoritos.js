import React from 'react';

function JogadoresFavoritos({ favoritos }) {
  return (
    <div>
      <h2>Jogadores Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>Nenhum jogador favorito adicionado.</p>
      ) : (
        favoritos.map((atleta) => (
          <div key={atleta.id} className="favorito-atleta">
            <img src={atleta.image} alt={atleta.name} width={50} />
            <h3>{atleta.fullname}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default JogadoresFavoritos;