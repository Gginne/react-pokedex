<<<<<<< HEAD
import React from 'react'

const Pokecard = (props) => {
    return (
    <div className="col s12 m4 l2 modal-trigger" data-target="modal1">
        <div className="card" style={{"cursor": "pointer"}} onClick={() => props.onClick(props.pokemon.index)}>
            <div className="card-content">
            <span className="card-title">{props.pokemon.indexToString()} {props.pokemon.name}</span>
            <img alt="front" src={props.pokemon.sprites.front_default}></img>
            <p>{props.pokemon.types}</p>
            </div>
        </div>
        
    </div>
    
    )
}

export default Pokecard
=======
import React from 'react'

const Pokecard = (props) => {
    return (
    <div className="col s12 m4 l2">
        <div className="card" style={{"cursor": "pointer"}} onClick={() => props.onClick(props.pokemon.index)}>
            <div className="card-content">
            <span className="card-title">{props.pokemon.indexToString()} {props.pokemon.name}</span>
            <img alt="front" src={props.pokemon.sprites.front_default}></img>
            <p>{props.pokemon.types}</p>
            </div>
        </div>
        
    </div>
    
    )
}

export default Pokecard
>>>>>>> 702f9290b778323ff65aa71b7363622d70d9c62f
