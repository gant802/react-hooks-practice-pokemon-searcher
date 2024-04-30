import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [pokemons, setPokemons] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
fetch('http://localhost:3001/pokemon')
.then(res => res.json())
.then(data => setPokemons(data))
}, [])

const foundPokemons = pokemons.filter(pokemon => {
  if (search === '') {
    return pokemon
  } else {
 return pokemon.name.toLowerCase().includes(search.toLowerCase())
}})

function handleNewPokemon(newPokemon) {
  fetch('http://localhost:3001/pokemon', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon)
  })
  .then(res => res.json())
  .then(data => setPokemons([...pokemons, data]))
  
}




  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={handleNewPokemon}/>
      <br />
      <Search searchInput={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={foundPokemons}/>
    </Container>
  );
}

export default PokemonPage;
