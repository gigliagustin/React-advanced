import React from 'react';

const Cards = ({ character, getCharacterId }) => {
  const getCharacterById = () => {
    getCharacterId(character.id);
  };
  return (
    <div className="card">
  <img src={character.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{character.name}</h5>
    <p className="card-text">His location is: {character.location.name}</p>
    <a href='#/' className="btn btn-primary" onClick={getCharacterById}>Go somewhere!</a>
  </div>
</div>
  );
};

export default Cards;
