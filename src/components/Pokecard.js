import React from 'react'

const Pokecard = (props) => {
    return (
    
    <div className="col-sm-12 col-md-4 col-lg-2 mx-auto" onClick={() => props.setToCurrent(props.index)}>
      <div class="card poke-card shadow my-2 text-center">
      <h5 class="card-title py-2 mt-1">{props.pokemon.indexToString()} {props.pokemon.name}</h5>
        <div class="card-img-top mx-auto p-2" style={{"background": props.pokemon.setTypeColor()}}>
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name + " sprite"}/>
        </div>
        
        <div class="card-body py-2">
            <p className="lead">{props.pokemon.types}</p>
        </div>
        </div>
        
    </div>
    
    )
}

export default Pokecard
