export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
      <h3 className="font-semibold">Ingredients:</h3>
      <ul className="list-disc ml-6">
        {recipe.ingredients.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
      <h3 className="font-semibold mt-3">Steps:</h3>
      <ol className="list-decimal ml-6">
        {recipe.steps.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ol>
    </div>
  );
}
