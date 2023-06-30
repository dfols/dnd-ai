import { connectToDatabase } from "../../../utils/mongodb";
import Character from "../../../models/Character";

// Named export for the API route
export async function POST(req) {
  await connectToDatabase();
  const {
    characterName,
    characterConcept,
    race,
    characterClass,
    abilityScores,
    background,
    alignment,
    skills,
    equipment,
    spells,
    personalityTraits,
    bonds,
    flaws,
    ideals,
  } = await req.json();

  let character = new Character({
    characterName,
    characterConcept,
    race,
    characterClass,
    abilityScores,
    background,
    alignment,
    skills,
    equipment,
    spells,
    personalityTraits,
    bonds,
    flaws,
    ideals,
  });

  await character.save();

  let options = {
    status: 201,
  };

  let responseJSON = new Response(JSON.stringify(character), options);
  return responseJSON;
}
