import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../globals";

const PlanetDetails = (props) => {
  const [planet, setPlanet] = useState({});
  // Just ran into a bug, but for future reference the useParams isn't actually a made up variable.
  // This is the passing variable that is being used for the link itself. Basically the `:SLUG`
  const { planetsId } = useParams();

  useEffect(() => {
    const getPlanet = async () => {
      const res = await axios.get(`${BASE_URL}/planets`);
      setPlanet(res.data.results[planetsId]);
    };
    getPlanet();
  }, []);

  return (
    <>
      <h2>{planet.name}</h2>
      <dl>
        <dt>Population</dt>
        <dd>{planet.population}</dd>
        <dt>Terrain</dt>
        <dd>{planet.terrain}</dd>
        <dt>Gravity</dt>
        <dd>{planet.gravity}</dd>
      </dl>
    </>
  );
};
export default PlanetDetails;
