import React from 'react';

const Button = () => {
  const handleButton = () => {
    console.log('Clickeaste');
  };
  return (
    <button onClick={handleButton}>My Button!</button>
  );
};

export default Button;
