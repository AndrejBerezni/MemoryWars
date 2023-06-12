import React from "react"
import { Link } from "react-router-dom"
import '../App.css'

export default function Navigation() {
    return (
        <div className="navigation">
            <Link to="/" >GAME</Link>
            <Link to="/highscores">HIGHSCORES</Link>
        </div>
    )
}