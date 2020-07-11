import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pokecard from "./components/Pokecard";
import Pokemodal from "./components/Pokemodal"
import Pokedata from "./API/Pokedata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      current: null,
      filter: null,
    };
    this.setCurrent = this.setCurrent.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  async componentDidMount() {
    const data = new Pokedata(151);
    const pokemonURLs = await data.getPokedata()
    pokemonURLs.forEach(async (pokemon, index) => {
      console.log(pokemon)
        let url = pokemon.url;
        const newPokemon = await data.setPokemon(url, index+1)
        this.setState(prevState => {
          return {pokemons: [...prevState.pokemons, newPokemon].sort((a,b) => a.index-b.index)}
        })
    })
  }

  setCurrent(idx) {
    console.log(idx)
    let pokemon = this.state.pokemons[idx - 1];
    this.setState({ current: pokemon });
  }

  setFilter(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    const {filter} = this.state
    const pokemons = filter
      ? this.state.pokemons.filter((pokemon) => pokemon.name.includes(filter))
      : this.state.pokemons;

    return (
      <div className="App">
        
          <div className="row mt-4 mb-5 mx-auto">
          <input
              type="text"
              placeholder="Search Pokemon"
              onChange={(e) => this.setFilter(e)}
              class="filter-input border mx-auto w-50 p-2 px-3"
            />
    
        </div>
       
        <Pokemodal pokemon={this.state.current}/>

        <div className="row">
          {pokemons.map((pokemon) => (
            <Pokecard
              pokemon={pokemon}
              key={pokemon.index}
              index={pokemon.index}
              current={this.setCurrent}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
