import React from 'react'

const Pokecard = (props) => {
    return (
    <div className="col s12 m4 l2">
        <div className="card" style={{"cursor": "pointer"}} onClick={() => props.onClick(props.index)}>
            <div className="card-content">
            <span className="card-title">{props.index}. {props.name}</span>
            <img alt="front" src={props.sprites.front_default}></img>
            <p>{props.types}</p>
            </div>
        </div>
        
    </div>
    
    )
}

export default Pokecard
