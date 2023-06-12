import React, { useState } from 'react';
import Card from './Card';
import cards from '../data/cards';
import '../App.css'

export default function Game() {
    const [cardsArray, setCardsArray] = useState(cards)
    const [gameOn, setGameOn] = useState(false);
    const [clickedCards, setClickedCards] = useState([]);
    const [score, setScore] = useState(0);

    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function handleCardClick(id) {
        if (!gameOn) {
            setGameOn(true)
        }
        if (clickedCards.indexOf(id) < 0) {
            setClickedCards([...clickedCards, id]);
            setScore(score + 1);
            setCardsArray(shuffleArray(cardsArray));
            console.log(clickedCards, score, gameOn)
        } else {
            setClickedCards([]);
            setScore(0);
            setGameOn(false);
            console.log(`Game over. Score: ${score}`)
        }
    }
    return (
        <div className='game'>
            {cardsArray.map(card => (
                <Card key={card.id} id={card.id} src={card.src} name={card.name} handleClick={handleCardClick} />
            ))}
        </div>
    )
}