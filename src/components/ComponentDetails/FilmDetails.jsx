import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../globals";

const FilmDetails = (props) => {
  // Whenever you use useState()
  // think about what I will get in return.
  const [film, setFilm] = useState({});
  const { filmId } = useParams();

  useEffect(() => {
    const getFilm = async () => {
      const res = await axios.get(`${BASE_URL}/films`);
      setFilm(res.data.results[filmId]);
    };
    getFilm();
  }, []);

  return (
    <>
      <h2>{film.title}</h2>
      <dl>
        <dt>Episode</dt>
        <dd>{film.episode_id}</dd>
        <dt>Producer</dt>
        <dd>{film.producer}</dd>
        <dt>Director</dt>
        <dd>{film.director}</dd>
        <dt>Release Date</dt>
        <dd>{film.release_date}</dd>
      </dl>
    </>
  );
};

export default FilmDetails;
