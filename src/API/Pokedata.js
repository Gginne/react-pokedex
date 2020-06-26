export default class Pokedata {
  constructor(range) {
    this.url = `https://pokeapi.co/api/v2/pokemon?limit=${range}`;
    this.pokemons = [];
  }

  async getPokedata() {
    const res = await fetch(this.url);
    const data = await res.json();
    return data.results;
  }

  async setPokemon(url, index) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const { name, types, stats, sprites, weight, height} = data;
    const pokemon = new Pokemon(name, types, index, stats, sprites, weight, height);

    return pokemon;
  }
}

class Pokemon {
  constructor(name, types, index, stats, sprites, weight, height) {
    this.name = name;
    this.types =
      types.length > 1
        ? `${types[0].type.name}-${types[1].type.name}`
        : types[0].type.name;
    this.index = index;
    this.stats = stats;
    this.weight = weight;
    this.height = height;
    this.sprites = sprites;
  }

  indexToString(){
    if(this.index < 10){
      return "00"+this.index
    } else if(this.index >= 10 && this.index < 100){
      return "0"+this.index
    } else{
      return this.index
    }
  }
}
