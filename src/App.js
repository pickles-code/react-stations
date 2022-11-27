// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState } from 'react';



/**
 * 
 * @type {React.FC}
 */



export const App = () => {

  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/terrier-fox/n02095314_1582.jpg')

  const handleClick = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setDogUrl(result.message);
          console.log(result);
        }
      )
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">React-Stations</h1>
      </header>
      <p className="text">description</p>
      <img src={dogUrl} alt="" />
      <button onClick={handleClick}>change</button>
    </div>
  )
}
