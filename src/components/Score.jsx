import React from 'react';
import { useSelector } from 'react-redux';

export default function Score() {
    const currentScore = useSelector(state => state.score)
    return (
        <div className='score'>
        <p>Points: {currentScore} | Time: 00:16:84</p>
        </div>
    )
}