import React, { useState } from 'react';
import Card from './Card';
import cards from '../data/cards';
import '../App.css'

export default function Game() {
    const [gameOn, setGameOn] = useState(false);
    const [clickedCards, setClickedCards] = useState([]);
    const [score, setScore] = useState(0);

    function handleCardClick(id) {
        if (!gameOn) {
            setGameOn(true)
        }
        if (clickedCards.indexOf(id) < 0) {
            setClickedCards([...clickedCards, id]);
            setScore(score + 1);
            console.log(score, clickedCards);
        } else {
            setClickedCards([]);
            console.log(`Game over. Score: ${score}`)
            setScore(0);
            setGameOn(false)
        }
    }
    return (
        <div className='game'>
            {cards.map(card => (
                <Card key={card.id} id = {card.id} src={card.src} name={card.name} handleClick={handleCardClick}/>
            ))}
        </div>
    )
}