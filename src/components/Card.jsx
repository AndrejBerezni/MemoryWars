import React from 'react';

export default function Card({src, name}) {
    return (
        <div>
            <img src={src} alt= {name}/>
            <p>{name}</p>
        </div>
    )
}