import { useEffect, useState } from "react";
import { BASE_URL } from "./globals";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import StarshipList from "./components/StarshipList";
import PlanetList from "./components/PlanetList";
import FilmList from "./components/FilmList";
import CharacterList from "./components/CharacterList";
import NavBar from "./components/NavBar";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const res = await axios.get(`${BASE_URL}/starships`);
      setStarships(res.data.results);
    };

    const getPlanets = async () => {
      const res = await axios.get(`${BASE_URL}/planets`);
      setPlanets(res.data.results);
    };

    const getFilms = async () => {
      const res = await axios.get(`${BASE_URL}/films`);
      setFilms(res.data.results);
    };

    const getCharacters = async () => {
      const res = await axios.get(`${BASE_URL}/people`);
      setCharacters(res.data.results);
    };

    getStarships();
    getPlanets();
    getFilms();
    getCharacters();
  }, []);

  return (
    <>
      <NavBar />
      <h1>Starships!</h1>
      <Routes>
        <Route path="/" element={<h2>Star Wars Database :3</h2>} />
        <Route
          path="/starships"
          element={<StarshipList starships={starships} />}
        />
        <Route path="/planets" element={<PlanetList planets={planets} />} />
        <Route path="/films" element={<FilmList films={films} />} />
        <Route
          path="/characters"
          element={<CharacterList characters={characters} />}
        />
        <Route
          path="/*"
          element={<h3>404 Error | Please, return to the main page.</h3>}
        />
      </Routes>
    </>
  );
};

export default App;
