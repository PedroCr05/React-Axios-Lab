import { useParams } from "react-router-dom";

const CharacterDetails = (props) => {
  const { characterId } = useParams();

  const singularCharacter = props.result.find(
    (person) => person._id === Number(characterId)
  );

  return (
    <>
      <h2>{singularCharacter.name}</h2>
      <dl>
        {/* <dt>Home World</dt>
        <dd></dd> */}
        {/* When I get the chance. For sure ask how to do a back and forth link. That'd be nice to understand! */}
        <dt>Birth Year</dt>
        <dd>{singularCharacter.birth_year}</dd>
        <dt>Height</dt>
        <dd>{singularCharacter.height}</dd>
        <dt>Mass</dt>
        <dd>{singularCharacter.mass}</dd>
      </dl>
    </>
  );
};

export default CharacterDetails;
