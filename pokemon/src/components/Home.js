import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import '../App.css';


const Home = () => {

    const [pokeList, setPokeList] = useState([]);


    useEffect(() => {
        fetch("http://localhost:9292/pokemonWithOwner")
          .then((r) => r.json())
          .then((data) => setPokeList(data))
      }, []);

    function handleDeletePokemon(deletePokemon){
        const updatedClaims = pokeList.filter((currentPokeList) => currentPokeList.id !== deletePokemon.id)
            setPokeList(updatedClaims);
    }
  return (
    <div className='grid1'>

      {pokeList.map(( currentPokeList ) => (
        <Cards key={currentPokeList.id} currentPokeList={currentPokeList} handleDeletePokemon={handleDeletePokemon}/>
      ))}

    </div>
  )
}

export default Home
