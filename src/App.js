import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Game from "./components/Game";
import Highscores from "./components/Highscores";
import Score from "./components/Score";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Game />}/>
        <Route path="/highscores" element={<Highscores />}/>
        <Route />
      </Routes>
      <Score />
    </>
  );
}

export default App;
