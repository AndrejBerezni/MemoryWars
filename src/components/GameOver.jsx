import '../App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetScore } from '../redux_actions/scoreActions';
import { startGame } from '../redux_actions/gameActions';
import { resetTimer } from '../redux_actions/timerActions';
import { addScore } from '../config/firebase';

export default function GameOver() {
    const dispatch = useDispatch()
    const score = useSelector(state => state.score);
    const time = useSelector(state => state.timer.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const playerName = e.target.elements['player-name'].value;
        await addScore({
          name: playerName,
          score: score,
          time: time
        });
        dispatch(resetScore());
        dispatch(resetTimer());
        dispatch(startGame());
    }
    return (
        <div className='game-over'>
            <h1>GAME OVER</h1>
            <h2>Total guesses: {score}</h2>
            <h2>
                Time: {Math.floor(time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}
                :
                {time - Math.floor(time / 60) * 60 > 9 ? Math.round(time - Math.floor(time / 60) * 60) : `0${Math.round(time - Math.floor(time / 60) * 60)}`}
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='player-name'>Your name:</label>
                <input id='player-name' name='player-name' type='text' max='30' required/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}