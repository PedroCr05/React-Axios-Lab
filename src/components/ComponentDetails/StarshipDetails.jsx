import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../globals";

const StarshipDetails = (props) => {
  const [starship, setStarship] = useState({});
  const { starshipId } = useParams();

  useEffect(() => {
    const getStarship = async () => {
      const res = await axios.get(`${BASE_URL}/starships`);
      setStarship(res.data.results[starshipId]);
    };
    getStarship();
  }, []);

  return (
    <>
      <h2>{starship.name}</h2>
      <dl>
        <dt>Model</dt>
        <dd>{starship.model}</dd>
        <dt>Manufacturer</dt>
        <dd>{starship.manufacturer}</dd>
        <dt>Starship Class</dt>
        <dd>{starship.starship_class}</dd>
      </dl>
    </>
  );
};
export default StarshipDetails;
