import React from "react";

class Pokemodal extends React.Component {
  constructor(props) {
    super(props);
    this.exitModal = this.exitModal.bind(this)
  }

  exitModal(){
    this.props.changeCurrent(null)
  }

  render() {
    let {pokemon} = this.props
    return (
      <div className="poke-modal" onClick={this.exitModal}>
        <div class="card mx-auto">
          <div class="card-body text-center">
            <h2>{pokemon.indexToString()} {pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <img src={pokemon.sprites.back_default} alt={pokemon.name}/>
            <p className="lead">{pokemon.types}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemodal;
