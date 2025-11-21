export default function DietarySelector({ restrictions, setRestrictions }) {
  const options = [
    { key: "dairy_free", label: "Dairy-Free" },
    { key: "nut_free", label: "Nut-Free" },
    { key: "low_sugar", label: "Low Sugar" }
  ];

  function toggle(item) {
    setRestrictions(prev =>
      prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">Dietary Restrictions</h2>
      {options.map(opt => (
        <label key={opt.key} className="block text-lg">
          <input
            type="checkbox"
            className="mr-2"
            checked={restrictions.includes(opt.key)}
            onChange={() => toggle(opt.key)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
