// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState } from 'react';



/**
 * 
 * @type {React.FC}
 */



export const App = () => {

  const [dogUrl, setDogUrl] = useState([])

  const handleClick = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setDogUrl(result);
          console.log(result);
        }
      )
  };

  return (
    <div>
      <header>
        <h1>React-Stations</h1>
      </header>
      <p>description</p>
      <img src={dogUrl.message} alt="" />
      <button onClick={handleClick}>change</button>
    </div>
  )
}
