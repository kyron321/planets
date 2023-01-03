import Planet from "./Planet";
import { useState } from "react";

function PlanetData() {
  const [data, setData] = useState([
    {
      planet_id: 1,
      planet_name: "planet a",
      au_from_sun: "1",
      type: "gas",
      moon_count: "0",
    },
    {
      planet_id: 2,
      planet_name: "planet b",
      au_from_sun: "2",
      type: "rock",
      moon_count: "4",
    },
  ]);
  const planets = [];

  data.forEach((planet) => {
    planets.push(
      <Planet
        key={planet.planet_id}
        planet_name={planet.planet_name}
        type={planet.type}
        au_from_sun={planet.au_from_sun}
      />
    );
  });

  return <div>{planets}</div>;
}

export default PlanetData;
