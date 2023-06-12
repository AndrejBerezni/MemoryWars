import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Game from './components/Game';
import Highscores from './components/Highscores';
import Score from './components/Score';

function App() {
  return (
    <>
     <Navigation />
     <Game />
     <Score />
    </>
  );
}

export default App;
