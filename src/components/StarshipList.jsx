import { Link } from "react-router-dom";

const StarshipList = ({ starships }) => {
  if (!starships) {
    return <h3>The starships are landing... Please, hold on.</h3>;
  } else {
    return (
      <>
        <h2>Starships</h2>
        <ul>
          {starships.map((starship, idx) => (
            <li key={idx}>
              <Link to={`/starships/${idx}`}>{starship.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default StarshipList;
