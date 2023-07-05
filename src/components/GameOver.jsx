import '../App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetScore } from '../redux_actions/scoreActions';
import { startGame } from '../redux_actions/gameActions';
import { resetTimer } from '../redux_actions/timerActions';
import { addScore } from '../config/firebase';
import { motion } from 'framer-motion';

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
        <motion.div
            className='game-over'
            animate={{
                scale: 1,
                opacity: 1
            }}
            initial={{
                scale: 0,
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}
        >
            <motion.h1
                className='game-over-title'
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                initial={{
                    scale: 0,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                    type: 'spring',
                }}
            >
                GAME OVER
            </motion.h1>
            <motion.h2
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                initial={{
                    scale: 0,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                    type: 'spring',
                    delay: 0.8
                }}
            >Total guesses: {score}</motion.h2>
            <motion.h2
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                initial={{
                    scale: 0,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                    type: 'spring',
                    delay: 0.8
                }}
            >
                Time: {Math.floor(time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}
                :
                {time - Math.floor(time / 60) * 60 > 9 ? Math.round(time - Math.floor(time / 60) * 60) : `0${Math.round(time - Math.floor(time / 60) * 60)}`}
            </motion.h2>
            <motion.form
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                initial={{
                    scale: 0,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                    type: 'spring',
                    delay: 1.4
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor='player-name'>Your name:</label>
                <input id='player-name' name='player-name' type='text' max='30' required />
                <button type='submit'>Submit</button>
            </motion.form>
        </motion.div>
    )
}