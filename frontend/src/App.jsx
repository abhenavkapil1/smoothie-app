import { useState } from "react";
import FlavorSelector from "./components/FlavorSelector.jsx";
import DietarySelector from "./components/DietarySelector.jsx";
import RecipeCard from "./components/RecipeCard.jsx";
import { generateSmoothie } from "./api/smoothieApi.js";

export default function App() {
  const [flavors, setFlavors] = useState([]);
  const [restrictions, setRestrictions] = useState([]);
  const [recipe, setRecipe] = useState(null);

  async function handleGenerate() {
    const result = await generateSmoothie({ flavors, restrictions });
    setRecipe(result);
  }

  return (
    <div className="min-h-screen p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Smoothie Genie</h1>

      <FlavorSelector flavors={flavors} setFlavors={setFlavors} />
      <div className="h-4" />
      <DietarySelector restrictions={restrictions} setRestrictions={setRestrictions} />

      <button
        onClick={handleGenerate}
        className="w-full bg-purple-500 text-white py-3 rounded-xl mt-6 hover:bg-purple-600"
      >
        Generate Smoothie
      </button>

      <RecipeCard recipe={recipe} />
    </div>
  );
}
