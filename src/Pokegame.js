import React from "react";
import Pokedex from "./Pokedex";

function Pokegame(props) {
    console.log("!!!!!", props)
  let hand1 = [];
  let hand2 = [...props.pokemon];

//  * This is just taking the entire array and saying while hand 3 is greater than hand1 take a card from hand2 and put it in hand one. This is not taking four random Pokemon.

  while (hand1.length < hand2.length) {
    // take a random pokemon from hand 2, add it to hand 1
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62, description: "Charmander is a small, bipedal, dinosaur like Pokémon. Most of its body is colored orange, while its underbelly is a light yellow color." },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63, description: "A turtle Pokémon with large eyes and chubby cheeks, capable of moving either on two feet or on all fours."},
    { id: 11, name: "Metapod", type: "bug", base_experience: 72, description: "A Metapod does not move very much because it is preparing its soft innards for evolution inside the shell."},
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178, description: "A lepidopteran insect Pokémon which resembles a vaguely anthropomorphic butterfly with a purple body." },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112, description: "A creature that has short, yellow fur with brown markings covering its bacs and part of their lightning bolt-shaped tail. " },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95, description: "Jigglypuff are characterized by putting their enemies to sleep by singing a lullaby." },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225, description: "Gengar is the final evolved form of Gastly. It can absorb any surrounding heat, leaving a sudden chill." },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65, description: "A mammalian creature with brown fur, a bushy tail that has a cream-colored tip, and a furry collar that is also cream-colored" }
  ]
};

export default Pokegame;
