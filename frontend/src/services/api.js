const API_URL = import.meta.env.VITE_API_URL;

export const getProjects = async () => {
  const res = await fetch(`${API_URL}/api/projects`);
  return res.json();
};
