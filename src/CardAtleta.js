import React, { useState } from 'react';

function CardAtleta({ atleta, adicionarAosFavoritos }) {
  const [adicionado, setAdicionado] = useState(false);

  const handleClick = () => {
    adicionarAosFavoritos(atleta);
    setAdicionado(true); // Marca o atleta como adicionado
  };

  return (
    <div>
      <img src={atleta.image} alt={atleta.fullname} width={50} />
      <p>{atleta.fullname} ({atleta.nickname})</p>
      <p>
        <img src={atleta.country.flag} alt={atleta.country.name} width={20} />
        {atleta.country.name}
      </p>
      <button onClick={handleClick} disabled={adicionado}>
        {adicionado ? 'Já nos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
}

export default CardAtleta;
