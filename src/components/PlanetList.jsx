import { Link } from "react-router-dom";

const PlanetList = ({ planets }) => {
  return (
    <>
      <h1>Planets</h1>
      {planets.map((planet, idx) => (
        <li key={idx}>
          <Link to={`/planets/${idx}`}>{planet.name}</Link>
        </li>
      ))}
    </>
  );
};

export default PlanetList;
