import { useParams } from "react-router-dom";

const StarshipDetails = (props) => {
  const { starshipId } = useParams();

  const singularStarship = props.result.find(
    (ship) => ship._id === Number(starshipId)
  );

  return (
    <>
      <h2>{singularStarship.name}</h2>
      <dl>
        <dt>Model</dt>
        <dd>{singularStarship.model}</dd>
        <dt>Manufacturer</dt>
        <dd>{singularStarship.manufacturer}</dd>
        <dt>Starship Class</dt>
        <dd>{singularStarship.starship_class}</dd>
      </dl>
    </>
  );
};
export default StarshipDetails;
