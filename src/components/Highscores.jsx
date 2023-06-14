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
    <li key={index}>{score.name} - {score.score} -  {Math.floor(score.time / 60) > 9 ? Math.floor(score.time / 60) : `0${Math.floor(score.time / 60)}`}
    :
    {score.time - Math.floor(score.time / 60) * 60 > 9 ? Math.round(score.time - Math.floor(score.time / 60) * 60) : `0${Math.round(score.time - Math.floor(score.time / 60) * 60)}`}</li>
))}
            </ol>
        </div>
    )
}