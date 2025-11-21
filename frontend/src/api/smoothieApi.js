export async function generateSmoothie(options) {
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const res = await fetch(`${backendURL}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options)
  });

  return res.json();
}