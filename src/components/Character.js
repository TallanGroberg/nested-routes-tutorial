import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


const Character = (props) => {
  const [character, setCharacter] = useState([])


  console.log('character',character)
  useEffect( () => {
    axios.get(`https://swapi.co/api/people/?search=${props.match.params.name}`)
      .then(res => {
        setCharacter(res.data.results)
      })
  }, [])


  return (
    <div>
        Character: 
        {character.map(char => {
          return <>
          <h1>{char.name}</h1>
            <p>eye color: {char.eye_color}</p>
            <p>hair color: {char.hair_color}</p>
            <p>birth year: {char.birth_year}</p>
            <p> gender: {char.gender}</p>
          </>
        })}
        <Link to='/home'>back to home</Link>
    </div>
  );
};

export default Character;