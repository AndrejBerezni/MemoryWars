import React, { useState } from 'react';
import Card from './Card';
import cards from '../data/cards';
import '../App.css'
import { incrementScore, resetScore } from '../redux_actions/scoreActions';
import { useDispatch } from 'react-redux';

export default function Game() {
    const dispatch = useDispatch();

    /* Keeping these two states here instead of in the store
    because they are not used anywhere outside this component */
    const [cardsArray, setCardsArray] = useState(cards)
    const [clickedCards, setClickedCards] = useState([]);

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
        if (clickedCards.indexOf(id) < 0) {
            setClickedCards([...clickedCards, id]);
            dispatch(incrementScore())
            setCardsArray(shuffleArray(cardsArray));
        } else {
            setClickedCards([]);
            dispatch(resetScore());
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