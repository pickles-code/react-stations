// DO NOT DELETE
import React, { useState } from "react";
import { DogImage } from "./DogImage";

export const Description = () => {

  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/terrier-fox/n02095314_1582.jpg')

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
      <p className="text">description</p>
      <DogImage img={dogUrl.message} />
      <button onClick={handleClick}>change</button>
    </div>
  )
}