import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTimer, resetTimer } from '../redux_actions/timerActions';

export default function Score() {
    const currentScore = useSelector(state => state.score);
    const currentTime = useSelector(state => state.timer);
    const gameOn = useSelector(state => state.gameOn);
    const dispatch = useDispatch();

    useEffect(() => {
        let interval = null;
        if (gameOn) {
            interval = setInterval(() => {
                dispatch(incrementTimer())
            }, 1000);
        } else {
            dispatch(resetTimer())
        }
        return () => clearInterval(interval);
    }, [dispatch, gameOn]);
    return (
        <div className='score'>
            <p>Points: {currentScore} | Time:
                {Math.floor(currentTime / 60) > 9 ? Math.floor(currentTime / 60) : `0${Math.floor(currentTime / 60)}`}
                :
                {currentTime - Math.floor(currentTime / 60) * 60 > 9 ? Math.round(currentTime - Math.floor(currentTime / 60) * 60) : `0${Math.round(currentTime - Math.floor(currentTime / 60) * 60)}`}</p>
        </div>
    )
}