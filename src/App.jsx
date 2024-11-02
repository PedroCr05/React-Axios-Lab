import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "./globals";
import "./App.css";

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const res = await axios.get(
        `${BASE_URL}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      );
      setStarships(res.data);
    };

    getStarships();
  }, []);

  return (
    <>
      <div starships={starships}></div>
    </>
  );
};

export default App();
