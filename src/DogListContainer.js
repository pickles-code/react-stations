// DO NOT DELETE
import React from "react";
import { useState, useEffect } from 'react';


export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(
        (result) => {
          const lists = result.message
          setBreeds(Object.keys(lists))
          console.log(lists);
        }
      )
  }, [])

  return (
    <div>
      <ul>
        {breeds.map(breed => (
          <li key={breeds}>
            {breed}
          </li>
        ))}
      </ul>
    </div>
  )
}