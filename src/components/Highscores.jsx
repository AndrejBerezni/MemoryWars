import React, { useEffect, useState } from 'react';
import { getScores } from '../config/firebase';
import { motion } from 'framer-motion';

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
        <motion.div
        className='highscores'
        animate = {{
            y: 0,
            opacity: 1,
            scale: 1
        }}
        initial ={{
            y: 500,
            opacity: 0,
            scale: 0
        }}
        transition={{
            duration: 1
        }}
        >
            <ol>
                {scores.map((score, index) => (
                    <li key={index}>{score.name} - {score.score} -  {Math.floor(score.time / 60) > 9 ? Math.floor(score.time / 60) : `0${Math.floor(score.time / 60)}`}
                        :
                        {score.time - Math.floor(score.time / 60) * 60 > 9 ? Math.round(score.time - Math.floor(score.time / 60) * 60) : `0${Math.round(score.time - Math.floor(score.time / 60) * 60)}`}</li>
                ))}
            </ol>
        </motion.div>
    )
}