import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../globals";

const CharacterDetails = (props) => {
  const [homeworld, setHomeworld] = useState({});
  const [character, setCharacter] = useState({});
  const { characterId } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/people`);
        setCharacter(res.data.results[characterId]);

        if (character.homeworld) {
          const res = await axios.get(character.homeworld);
          setHomeworld(res);
        }
      } catch (e) {
        console.log(`Error. Page broken`);
      }
    };
    getCharacter();
  }, []);

  console.log(homeworld);
  return (
    <>
      <h2>{character.name}</h2>
      <dl>
        <dt>Home World</dt>
        <dd></dd>
        {/* When I get the chance. For sure ask how to do a back and forth link.
        That'd be nice to understand! */}
        <dt>Birth Year</dt>
        <dd>{character.birth_year}</dd>
        <dt>Height</dt>
        <dd>{character.height}</dd>
        <dt>Mass</dt>
        <dd>{character.mass}</dd>
      </dl>
    </>
  );
};

export default CharacterDetails;
