import { useState, useEffect } from "react";

function PlanetData() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch(`https://space-facts.herokuapp.com/api/planets`)
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.planets);
      });
  }, []);

  return (
    <>
      
      <div className="planet-data">
      {planets.map((planet)=>(
        <div className="data-box">
          <h2 className="header-text" key={planet.planet_id}>{planet.planet_name}</h2>
          <h3 key={planet.planet_id}>Distance from the sun {planet.au_from_sun}</h3>
          <h3 key={planet.planet_id}>Planet type {planet.type}</h3>
          <h3 key={planet.planet_id}>Moon Count {planet.moon_count}</h3>
        </div>

        
        ))}
        </div>
        </>
    );
  }
  
  
export default PlanetData;
