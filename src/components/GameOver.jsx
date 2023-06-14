import '../App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetScore } from '../redux_actions/scoreActions';
import { startGame } from '../redux_actions/gameActions';
import { resetTimer } from '../redux_actions/timerActions';

export default function GameOver() {
    const dispatch = useDispatch()
    const score = useSelector(state => state.score);
    const time = useSelector(state => state.timer.value);

    return (
        <div className='game-over'>
            <h1>GAME OVER</h1>
            <h2>Total guesses: {score}</h2>
            <h2>
                Time: {Math.floor(time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}
                :
                {time - Math.floor(time / 60) * 60 > 9 ? Math.round(time - Math.floor(time / 60) * 60) : `0${Math.round(time - Math.floor(time / 60) * 60)}`}
            </h2>
            <form>
                <label for='player-name'>Your name:</label>
                <input id='player-name' name='player-name' type='text' max='30' required/>
                <button type='submit' onClick={(e) => {
                    e.preventDefault();
                    dispatch(resetScore());
                    dispatch(resetTimer());
                    dispatch(startGame())
                }}>Submit</button>
            </form>
        </div>
    )
}