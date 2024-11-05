import { Link } from "react-router-dom";

const FilmList = ({ films }) => {
  if (!films) {
    return (
      <h1>
        This event never happened. You're from another timeline. Please go back
        to the main page!
      </h1>
    );
  } else {
    return (
      <>
        <h1>Films</h1>
        <ul>
          {films.map((film, idx) => (
            <li key={idx}>
              <Link to={`/films/${idx}`}>{film.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default FilmList;
