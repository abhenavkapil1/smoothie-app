export default function FlavorSelector({ flavors, setFlavors }) {
  const options = ["Strawberry", "Mango", "Blueberry", "Banana"];

  function toggle(item) {
    setFlavors(prev =>
      prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">Choose Flavors</h2>
      <div className="flex flex-wrap gap-3">
        {options.map(o => (
          <button
            key={o}
            onClick={() => toggle(o)}
            className={`px-4 py-2 border rounded-full ${flavors.includes(o) ? "bg-pink-300" : "bg-gray-100"}`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
