import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIdex] = useState(0);
  const handlePrevious = () => {
    if (pokemonIndex > 0)
      setPokemonIdex(pokemonIndex - 1)
  }
  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1)
    setPokemonIdex(pokemonIndex +1)
  }
  
  

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
  return (
    <>
    <div>
    <PokemonCard 
    name= {pokemonList[pokemonIndex].name}
    imgSrc= {pokemonList[pokemonIndex].imgSrc} /> 
    </div>
    
    <button type="button" onClick={handlePrevious}>Précédent</button>
    <button type="button" onClick={handleNext}>Suivant</button>
    
    </>
  );
};





export default App;