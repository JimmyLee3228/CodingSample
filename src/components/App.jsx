import React from 'react';
import Checkers from './Checkers';
import GameBoard from './GameBoard';
import GameHoleDef from './GameHoleDef';

const App = () => {
  return (
    <svg width='100vw' height="100vh" xmlns="http://www.w3.org/2000/svg">
      <GameHoleDef />
      <Checkers />
      <GameBoard />
    </svg>
  );
}

export default App;
