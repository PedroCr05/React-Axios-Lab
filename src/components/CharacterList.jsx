import { Link } from "react-router-dom";
import FilmList from "./FilmList";

const CharacterList = ({ characters }) => {
  if (!characters) {
    return (
      <>
        <h1>Characters</h1>
        <ul>
          {characters.map((character, idx) => (
            <li key={idx}>
              <Link to={`/characters/${idx}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default CharacterList;
