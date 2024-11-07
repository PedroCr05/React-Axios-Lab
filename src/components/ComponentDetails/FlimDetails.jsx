import { useParams } from "react-router-dom";

const FilmDetails = (props) => {
  const { filmId } = useParams();

  const singularFilm = props.result.find((film) => film._id === Number(filmId));

  return (
    <>
      <h2>{singularFilm.title}</h2>
      <dl>
        <dt>Episode</dt>
        <dd>{singularFilm.episode_id}</dd>
        <dt>Producer</dt>
        <dd>{singularFilm.producer}</dd>
        <dt>Director</dt>
        <dd>{singularFilm.director}</dd>
        <dt>Release Date</dt>
        <dd>{singularFilm.release_date}</dd>
      </dl>
    </>
  );
};

export default FilmDetails;
