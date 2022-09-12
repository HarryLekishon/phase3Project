import React from 'react'

const Cards = ({currentPokeList, handleDeletePokemon}) => {

  function handleDeleteClick(){

    fetch(`http://localhost:9292/pokemon/${currentPokeList.id}`, {
        method: "DELETE"
    })
    .then((resp) => resp.json())
    .then((deletePokmon) => handleDeletePokemon(deletePokmon))

}

  return (
    <div style={{border: '1px solid #efefef', background: '#fff'}}>
      <img src={currentPokeList.image} alt={currentPokeList.typing} class="rounded-circle" width="200" height="200"/>
      <div><a href="#">Review game</a></div>
      <button type="button" className="btn btn-danger btn-sm" onClick={handleDeleteClick}>Delete</button>

    </div>
  )
}

export default Cards
