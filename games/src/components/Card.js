import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function Card({ currentPokeList }) {


  return (
   
    <div>
    
      <img src={currentPokeList.image} alt={currentPokeList.typing} class="rounded-circle" width="200" height="200"/>
      <div>Species {currentPokeList.species}</div>
      <div>Typing: {currentPokeList.typing}</div>
      <div>First Name: {currentPokeList["owner"].first_name}</div>
      <div>Last Name: {currentPokeList["owner"].last_name}</div>

   
    </div>
 
  )
}
export default Card

