import React from 'react'

const Pokecard = (props) => {
    return (
    
    <div className="col-sm-12 col-md-4 col-lg-2 ">
      <div class="card poke-card shadow m-2 py-1 text-center">
      <h4 class="card-title">{props.pokemon.indexToString()} {props.pokemon.name}</h4>
        <div class="card-img-top mx-auto p-3">
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name + " sprite"}/>
        </div>
        
        <div class="card-body">
            <p>{props.pokemon.types}</p>
        </div>
        </div>
        
    </div>
    
    )
}

export default Pokecard
