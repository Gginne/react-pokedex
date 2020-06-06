import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Pokecard from "./components/Pokecard";
import Pokehead from "./components/Pokehead";
import Pokedata from "./API/Pokedata";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      pokemons: [],
      current: null
    }
    this.setCurrent = this.setCurrent.bind(this)
  }
  
  componentDidMount(){
    const data = new Pokedata();
    data.getPokedata()
        .then(pokemons => {
          pokemons.forEach((pokemon, idx) => {
            let index = idx + 1
            let url = pokemon.url
            data.setPokemon(url, index)
                .then(newPokemon => {
                  this.setState(prevState => ({
                    pokemons: [...prevState.pokemons, newPokemon].sort((a,b) => a.index-b.index)
                  }))
                })
            
          });
          
        })   
  }

  setCurrent(idx){
    this.state.pokemons.forEach(pokemon => {
      if(pokemon.index === idx){
        this.setState({current: pokemon})
      }
      
    })
    
  }

  render() {
    return (
      <div className="App">

        <Pokehead pokemon={this.state.current}/>
        
        <div className="row">
           {this.state.pokemons.map(pokemon => (
           <Pokecard name={pokemon.name} 
                     index={pokemon.index}
                     types={pokemon.types}
                     sprites={pokemon.sprites} 
                     key={pokemon.index} 
                     onClick={(idx) => this.setCurrent(idx)}
                     />
           ))
           }
        </div>

      </div>
    );
  }
}

export default App;
