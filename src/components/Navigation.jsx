import React from "react"
import { Link } from "react-router-dom"
import '../App.css';
import { motion } from "framer-motion";

export default function Navigation() {
    return (
        <motion.div
            className="navigation"
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            initial={{
                x: -600,
                opacity: 0,
                scale: 0
            }}
            transition={{
                duration: 1
            }}
        >
            <Link to="/" >GAME</Link>
            <Link to="/highscores">HIGHSCORES</Link>
        </motion.div>
    )
}