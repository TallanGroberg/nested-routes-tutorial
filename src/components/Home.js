import React, {useEffect, useState} from 'react';
//get the Link 
import {Link}  from 'react-router-dom'

// for the fetch request
import axios from 'axios'

const Home = (props) => {
  const [characters, setCharacters] = useState([])
  console.log(characters)
  useEffect( () => {
    axios.get(`https://swapi.co/api/people`)
      .then(res => {
        setCharacters(res.data.results)
      })
  }, [])
  return (
    <div>
      Home: 
      {characters.map(character => {
        return <Link to={character.name}>{character.name}</Link>
      })}

    </div>
  );
};

export default Home;