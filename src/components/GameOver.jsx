import '../App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetScore } from '../redux_actions/scoreActions';
import { startGame } from '../redux_actions/gameActions';
import { resetTimer } from '../redux_actions/timerActions';
import { addScore } from '../config/firebase';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

//Objects for framer properties to be reused
const framerAnimate = {
    scale: 1,
    opacity: 1
}

const framerInitial = {
    scale: 0,
    opacity: 0
}

const framerTransition = {
    duration: 1.2,
    type: 'spring'
}

// Component
export default function GameOver() {
    const dispatch = useDispatch()
    const score = useSelector(state => state.score);
    const time = useSelector(state => state.timer.value);

    // Save score to database
    const handleSubmit = async (e) => {
        e.preventDefault();
        const playerName = e.target.elements['player-name'].value;
        await addScore({
            name: playerName,
            score: score,
            time: time,
            id: uuid()
        });
        dispatch(resetScore());
        dispatch(resetTimer());
        dispatch(startGame());
    }

    // Close without saving score
    const handleCloseForm = () => {
        dispatch(resetScore());
        dispatch(resetTimer());
        dispatch(startGame());
    }

    return (
        <motion.div
            className='game-over'
            animate={framerAnimate}
            initial={framerInitial}
            transition={{
                duration: 0.2
            }}
        >
            <button
                className='close-game-over'
                onClick={handleCloseForm}
            >
                X
            </button>
            <motion.h1
                className='game-over-title'
                animate={framerAnimate}
                initial={framerInitial}
                transition={framerTransition}
            >
                GAME OVER
            </motion.h1>
            <motion.h2
                animate={framerAnimate}
                initial={framerInitial}
                transition={{
                    ...framerTransition,
                    delay: 0.8
                }}
            >Total guesses: {score}</motion.h2>
            <motion.h2
                animate={framerAnimate}
                initial={framerInitial}
                transition={{
                    ...framerTransition,
                    delay: 0.8
                }}
            >
                Time: {Math.floor(time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}
                :
                {time - Math.floor(time / 60) * 60 > 9 ? Math.round(time - Math.floor(time / 60) * 60) : `0${Math.round(time - Math.floor(time / 60) * 60)}`}
            </motion.h2>
            <motion.form
                animate={framerAnimate}
                initial={framerInitial}
                transition={{
                    ...framerTransition,
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