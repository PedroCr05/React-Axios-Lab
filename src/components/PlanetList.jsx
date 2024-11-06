import { Link } from "react-router-dom";

const PlanetList = ({ planets }) => {
  if (!planets) {
    return (
      <h3>
        Darth Vader decided to blow this up. Please, reference back to the main
        page!
      </h3>
    );
  } else {
    return (
      <>
        <h2>Planets</h2>
        {planets.map((planet, idx) => (
          <li key={idx}>
            <Link to={`/planets/${idx}`}>{planet.name}</Link>
          </li>
        ))}
      </>
    );
  }
};

export default PlanetList;
