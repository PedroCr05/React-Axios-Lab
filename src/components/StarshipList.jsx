import { Link } from "react-router-dom";

const StarshipList = ({ starships }) => {
  if (!starships) {
    return <h1>The starships are landing... Please, hold on.</h1>;
  } else {
    return (
      <>
        <h1>Starships</h1>
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
