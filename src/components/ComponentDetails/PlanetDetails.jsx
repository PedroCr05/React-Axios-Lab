import { useParams } from "react-router-dom";

const PlanetDetails = (pros) => {
  const { planetId } = useParams();

  const singularPlanet = props.results.find(
    (planet) => planet._id === Number(planetId)
  );

  return (
    <>
      <h2>{singularPlanet.name}</h2>
      <dl>
        <dt>Population</dt>
        <dd>{singularPlanet.population}</dd>
        <dt>Terrain</dt>
        <dd>{singularPlanet.terrain}</dd>
        <dt>Gravity</dt>
        <dd>{singularPlanet.gravity}</dd>
      </dl>
    </>
  );
};

export default PlanetDetails;
