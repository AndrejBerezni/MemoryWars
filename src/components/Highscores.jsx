import React, { useEffect, useState } from 'react';
import { getScores } from '../config/firebase';

export default function Highscores() {
    const [scores, setScores] = useState([])

    useEffect(() => {
        async function fetchScores() {
            const scoresArray = await getScores();
            setScores(scoresArray)
        }
        fetchScores()
    }, [])

    return (
        <div className='highscores'>
            <ol>
{scores.map((score, index)=> (
    <li key={index}>{score.name} - {score.score} - {score.time}</li>
))}
            </ol>
        </div>
    )
}