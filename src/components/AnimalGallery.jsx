import React from "react";
import { useEffect, useState } from "react";
import Home from "./Home";
import ListaAnimal from "./ListaAnimal";
import Navbar from "./Navbar";

function AnimalGallery() {

    const [animal, setAnimal] = useState([]);
  
    useEffect(() => {
      getAnimal();
    }, []);
  
    async function getAnimal () {
      const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/8")
      const data = await response.json()
      setAnimal(data)
      
    }
    
  
  
    return (
      <>
          <Navbar />
          <ListaAnimal animal={animal}/>
         
      </>
    );
  }

  export default AnimalGallery;