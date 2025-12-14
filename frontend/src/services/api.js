export async function getProjects() {
  const response = await fetch("http://localhost:5000/api/projects");
  return response.json();
}
