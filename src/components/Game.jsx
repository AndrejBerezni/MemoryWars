import React from 'react';
import Card from './Card';
import cards from '../data/cards';


import '../App.css'

export default function Game() {
    return (
        <div className='game'>
            {cards.map((card, index) => (
                <Card key={index} src={card.src} name={card.name} />
            ))}
        </div>
    )
}