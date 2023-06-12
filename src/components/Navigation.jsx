import React from "react"
import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <>
            <Link to="/" >GAME</Link>
            <Link to="/highscores">HIGHSCORES</Link>
        </>
    )
}