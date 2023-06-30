import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  characterName: {
    type: String,
    required: true,
  },
  characterConcept: {
    type: String,
  },
  race: {
    type: String,
    required: true,
  },
  characterClass: {
    type: String,
    required: true,
  },
  abilityScores: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
  },
  background: String,
  alignment: String,
  skills: [String],
  equipment: [String],
  spells: [String],
  personalityTraits: String,
  bonds: String,
  flaws: String,
  ideals: String,
});

export default mongoose.models.Character ||
  mongoose.model("Character", characterSchema);
