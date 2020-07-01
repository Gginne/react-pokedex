import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Pokecard from "./components/Pokecard";
import Pokehead from "./components/Pokehead";
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

  componentDidMount() {
    const data = new Pokedata(151);
    data.getPokedata().then((pokemons) => {
      pokemons.forEach((pokemon, idx) => {
        let index = idx + 1;
        let url = pokemon.url;
        data.setPokemon(url, index).then((newPokemon) => {
          this.setState((prevState) => ({
            pokemons: [...prevState.pokemons, newPokemon].sort(
              (a, b) => a.index - b.index
            ),
          }));
        });
      });
    });
  }

  setCurrent(idx) {
    let pokemon = this.state.pokemons[idx - 1];
    this.setState({ current: pokemon });
  }

  setFilter(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    const filter = this.state.filter;
    const pokemons = filter
      ? this.state.pokemons.filter((pokemon) => pokemon.name.includes(filter))
      : this.state.pokemons;

    return (
      <div className="App">
        {/*<Pokehead pokemon={this.state.current}/>*/}
        <div className="container">
          <div className="row" style={{ margin: "2rem auto" }}>
            <input
              type="text"
              placeholder="Search Pokemon"
              onChange={(e) => this.setFilter(e)}
            />
          </div>
        </div>

        <Pokemodal pokemon={this.state.current}/>

        <div className="row">
          {pokemons.map((pokemon) => (
            <Pokecard
              pokemon={pokemon}
              key={pokemon.index}
              onClick={(idx) => this.setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
