import { Link } from "react-router-dom";

const FilmList = ({ films }) => {
  if (!films) {
    return (
      <h3>
        This event never happened. You're from another timeline. Please go back
        to the main page!
      </h3>
    );
  } else {
    return (
      <>
        <h2>Films</h2>
        <ul>
          {films.map((film, idx) => (
            <li key={idx}>
              <Link to={`/films/${idx}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default FilmList;
