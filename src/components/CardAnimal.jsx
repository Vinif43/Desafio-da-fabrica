import React from "react";
import { useEffect, useState } from "react";

function CardAnimal() {

    const [animal, setAnimal] = useState("Animals here");
  
    useEffect(() => {
      getAnimal();
    }, []);
  
    async function getAnimal () {
      const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
      const data = await response.json()
      setAnimal(data)
      
    }
    
  
  
    return (
      <>
          {/* <h1>Animal</h1> */}
          <article className="card__animal">
            
            <img  src= {animal.image_link} />
            <h2><strong>Name:</strong> {animal.name}</h2>
            <div className="card__detail">
              <p><strong>Latin name: </strong>{animal.latin_name}</p>
              <p><strong>Habitat:</strong> {animal.habitat}</p>
              <p><strong>Diet:</strong> {animal.diet}</p>
              <p><strong>Localization:</strong> {animal.geo_range}</p>
            </div>
            <button type="button" className="butao" onClick={getAnimal} >Geral novo animal</button>
          </article>
         
      </>
    );
  }

  export default CardAnimal;