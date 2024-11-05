import { useEffect, useState } from "react";
import { BASE_URL } from "./globals";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import StarshipList from "./components/StarshipList";
import PlanetList from "./components/PlanetList";
import NavBar from "./components/NavBar";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const res = await axios.get(BASE_URL);
      setStarships(res.data.results);
    };

    const getPlanets = async () => {
      const res = await axios.get(BASE_URL);
      setPlanets(res.data.results);
    };

    getStarships();
    getPlanets();

    console.log(planets);
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
        <Route
          path="/*"
          element={<h2>404 Error | Please, return to the main page.</h2>}
        />
      </Routes>
    </>
  );
};

export default App;
