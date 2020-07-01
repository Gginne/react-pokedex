import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Pokecard from "./components/Pokecard";
import Pokehead from "./components/Pokehead";
<<<<<<< HEAD
import Pokemodal from "./components/Pokemodal"
import Pokedata from "./API/Pokedata";

=======
import Pokedata from "./API/Pokedata";


>>>>>>> 702f9290b778323ff65aa71b7363622d70d9c62f
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
<<<<<<< HEAD
            ),
=======
            )
>>>>>>> 702f9290b778323ff65aa71b7363622d70d9c62f
          }));
        });
      });
    });
  }

  setCurrent(idx) {
<<<<<<< HEAD
    let pokemon = this.state.pokemons[idx - 1];
    this.setState({ current: pokemon });
=======
    let pokemon = this.state.pokemons[idx-1]
    this.setState({ current: pokemon});
>>>>>>> 702f9290b778323ff65aa71b7363622d70d9c62f
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
<<<<<<< HEAD
=======
            <img src="./img/Pokémon_logo.svg" alt=""/>
>>>>>>> 702f9290b778323ff65aa71b7363622d70d9c62f
            <input
              type="text"
              placeholder="Search Pokemon"
              onChange={(e) => this.setFilter(e)}
            />
          </div>
        </div>

<<<<<<< HEAD
        <Pokemodal pokemon={this.state.current}/>

=======
>>>>>>> 702f9290b778323ff65aa71b7363622d70d9c62f
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
