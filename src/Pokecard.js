import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
	console.log(props);
    let id = props.id
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    console.log("desc", props.description)
	return (
        <div className='Pokecard'>
            <h3 className='Pokecard-name'>{props.name}</h3>
            <img src={imgUrl} className='Pokecard-img'></img>
            <ul className='Pokecard-ul'>
                <li>Type: {props.type}</li>
                <li>EXP: {props.base_experience}</li>
            </ul>
            <p className='Pokecard-desc' hidden>{props.description}</p>
        </div>
	);
};


export default Pokecard