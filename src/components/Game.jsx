import React, { useState } from 'react';
import Card from './Card';
import cards from '../data/cards';
import '../App.css'
import { incrementScore } from '../redux_actions/scoreActions';
import { startTimer, stopTimer } from '../redux_actions/timerActions';
// import { gameOver} from '../redux_actions/gameOverActions';
import { endGame } from '../redux_actions/gameActions'
import { useSelector, useDispatch } from 'react-redux';
import GameOver from './GameOver';

export default function Game() {
    const dispatch = useDispatch();
    const isTimerRunning = useSelector(state => state.timer.isRunning);
    const gameInProgress = useSelector(state => state.gameOn);
    const currentScore = useSelector(state => state.score);

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
    };

    function handleCardClick(id) {
        if (gameInProgress && !isTimerRunning) {
            dispatch(startTimer())
        }
        if (gameInProgress) {
            if (clickedCards.indexOf(id) < 0) {
                setClickedCards([...clickedCards, id]);
                dispatch(incrementScore())
                setCardsArray(shuffleArray(cardsArray));
            } else {
                dispatch(endGame());
                dispatch(stopTimer());
                setClickedCards([]);
            }
        }
        if (currentScore === 11) {
            dispatch(endGame());
            dispatch(stopTimer());
            setClickedCards([]);
        }
    };

    return (
        <div className='game'>
            {!gameInProgress && (
                <GameOver />
            )}
            {cardsArray.map(card => (
                <Card key={card.id} id={card.id} src={card.src} name={card.name} handleClick={handleCardClick} />
            ))}
        </div>
    )
}