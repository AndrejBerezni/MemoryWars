import React from 'react';

export default function Card({src, name, handleClick, id}) {
    return (
        <div className='card' onClick={() => handleClick(id)}>
            <img src={src} alt= {name}/>
            <p>{name}</p>
        </div>
    )
}