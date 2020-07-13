import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pokelist from "./components/Pokelist"
import Pokemodal from "./components/Pokemodal"
import Pokedata from "./API/Pokedata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: null,
      current: null
    };
    this.setFilter = this.setFilter.bind(this)
    this.setCurrent = this.setCurrent.bind(this)
  }

  setFilter(e) {
    this.setState({ filter: e.target.value });
  }

  setCurrent(pokemon) {
    console.log(pokemon)
    this.setState({ current: pokemon });
  }

  render() {

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
        <Pokelist filter={this.state.filter} changeCurrent={this.setCurrent}/>
      </div>
    );
  }
}

export default App;
