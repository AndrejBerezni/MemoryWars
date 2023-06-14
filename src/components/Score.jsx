import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTimer } from '../redux_actions/timerActions';

export default function Score() {
    const currentScore = useSelector(state => state.score);
    const currentTime = useSelector(state => state.timer.value);
    // const gameOn = useSelector(state => state.gameOn);
    const isTimerRunning = useSelector(state=> state.timer.isRunning)
    const dispatch = useDispatch();

    useEffect(() => {
        let interval = null;
        if (isTimerRunning) {
            interval = setInterval(() => {
                dispatch(incrementTimer())
            }, 1000);
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [dispatch,isTimerRunning]);
    return (
        <div className='score'>
            <p>Points: {currentScore} | Time:
                {Math.floor(currentTime / 60) > 9 ? Math.floor(currentTime / 60) : `0${Math.floor(currentTime / 60)}`}
                :
                {currentTime - Math.floor(currentTime / 60) * 60 > 9 ? Math.round(currentTime - Math.floor(currentTime / 60) * 60) : `0${Math.round(currentTime - Math.floor(currentTime / 60) * 60)}`}</p>
        </div>
    )
}