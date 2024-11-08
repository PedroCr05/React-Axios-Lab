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
        // To get the information from other parts of the the data base let's make sure to pass it through a proper variable.
        const resCharacter = res.data.results[characterId];
        // From there I can pass it through the setting of our useState function so it can show up
        setCharacter(resCharacter);

        // If we do plan to use this. I MUST pass a conditional so this code doesn't run before our first api get call
        if (resCharacter.homeworld) {
          // Only key difference is we get our variable call & the tag by using dot notation
          const res = await axios.get(resCharacter.homeworld);
          setHomeworld(res);
        }
      } catch (e) {
        console.log(`Error. Page broken`);
      }
    };
    getCharacter();
  }, []);
  // To double check if the useState for our variable that we care calling from another part within the database run the console log
  // console.log(homeworld);
  return (
    <>
      <h2>{character.name}</h2>
      <dl>
        <dt>Home World</dt>
        {/* When we do want to call it. Let's use dot notation so it does pass through! */}
        <dd>{homeworld.data.name}</dd>
        {/* When I get the chance. For sure ask how to do a back and forth link.
        That'd be nice to understand! - Complete! YAY learned something new hehe*/}
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
