import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

  function Pokedex(props) {
    let winMessage = null;
    if (props.isWinner) {
      winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
    }

    return (
    <div className='Pokedex'>
        <h1 className='Pokedex-title'>Pokedex</h1>
        <div className='Pokedex-cards'>
                {props.pokemon.map(p => <Pokecard
            id={p.id}
            name={p.name}
            img={p.img}
            type={p.type}
            base_experience={p.base_experience}
            description={p.description}
        />)}
        </div>
        <h4>Total experience: {props.exp}</h4>
      {winMessage}
    </div>
    )
};


  export default Pokedex
