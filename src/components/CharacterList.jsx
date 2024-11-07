import { Link } from "react-router-dom";
import FilmList from "./FilmList";

const CharacterList = ({ characters }) => {
  if (!characters) {
    return (
      <h3>
        This being has been either captured, killed, or gone missing. Please go
        back to the main page.
      </h3>
    );
  } else {
    return (
      <>
        <h2>Characters</h2>
        <ul>
          {characters.map((character, idx) => (
            <li key={idx}>
              <Link to={`/people/${idx}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default CharacterList;
