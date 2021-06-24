import React from 'react'
import "./card.styles.css"

export const Card = (prop)=>(
    <div className = "card-container">
        <img src={`https://robohash.org/${prop.monster.id}?set=set2&size=180x180`} alt={prop.monster.name} />
        <h2>{prop.monster.name}</h2>
        <p>{prop.monster.email}</p>
    </div>
)

// continue on 1 23