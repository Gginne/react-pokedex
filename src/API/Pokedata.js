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
    const { name, types, stats, sprites, weight, height } = data;
    const pokemon = new Pokemon(
      name,
      types,
      index,
      stats,
      sprites,
      weight,
      height
    );

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

  indexToString() {
    if (this.index < 10) {
      return "00" + this.index;
    } else if (this.index >= 10 && this.index < 100) {
      return "0" + this.index;
    } else {
      return this.index;
    }
  }

  setTypeColor() {
    const type1 = this.types.split("-")[0]
    const type2 = this.types.split("-")[1] || type1
    const color = prim => {
      return prim == "grass"
      ? "#f0fdeb"
      : prim == "fire"
      ? "#fdf7eb"
      : prim == "water"
      ? "#e9f4fc"
      : prim == "bug"
      ? "#f7ffdb"
      : prim == "flying" 
      ? "#eefdfd"
      : prim == "normal"
      ? "#fcfcfc"
      : prim == "poison"
      ? "#fce6fd"
      : prim == "electric"
      ? "#fffecc"
      : prim == "ground"
      ? "#fafad2"
      : prim == "fairy"
      ? "#fff5f8"
      : prim == "psychic"
      ? "#ffe8ef"
      : prim == "fighting"
      ? "#ffebda"
      : prim == "ice"
      ? "#e8faff"
      : prim == "rock"
      ? "#e4d0ab"
      : prim == "ghost"
      ? "#d0bed1"
      : prim == "dragon"
      ? "#e5d1ff"
      : "#eee"

    }
    
    return `linear-gradient(${color(type1)}, ${color(type2)})`
  }
}
