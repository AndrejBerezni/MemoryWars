import React from 'react';

export default function Card({src, name}) {
    return (
        <div className='card'>
            <img src={src} alt= {name}/>
            <p>{name}</p>
        </div>
    )
}