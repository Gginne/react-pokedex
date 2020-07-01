import React from "react";

const Pokehead = (props) => {
  return (
    <header class="red darken-1">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="card-panel white">
            <div class="card-title">
              <h1>
                {props.pokemon
                  ? `${props.pokemon.indexToString()}  ${props.pokemon.name.toUpperCase()}`
                  : "SELECT POKEMON"}
              </h1>
            </div>
            <div class="row card-content">
              <div class="col s12 m3 l3">
                <img
                  src={props.pokemon && props.pokemon.sprites.front_default}
                  alt=""
                  width="215"
                />
              </div>
              <div class="col s12 m8 l7">
                <h2>{props.pokemon && props.pokemon.types}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div class="nav-wrapper red darken-2">
          <span class="brand-logo"><img src="../img/Pokémon_logo.svg" alt=""/></span>
          <ul id="nav-mobile" class="right hide-on-med-and-down"></ul>
        </div>
      </nav>
    </header>
  );
};

export default Pokehead;
