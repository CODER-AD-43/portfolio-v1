import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectCard from "../components/ProjectCard";

function Graphic() {
  // 1️⃣ State for data
  const [projects, setProjects] = useState([]);

  // 2️⃣ State for loading (NEW)
  const [loading, setLoading] = useState(true);

  // 3️⃣ Fetch data
  useEffect(() => {
  getProjects().then(data => {
  setProjects(data.filter(p => p.category === "graphic"));
  setLoading(false);
});

}, []);


  // 4️⃣ JSX
  return (
    <section className="fade-up">
      <h2 className="page-title">Graphic Design</h2>

      <div className="grid">
        {loading ? (
          // 🔹 SHOW SKELETON WHILE LOADING
          <>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </>
        ) : (
          // 🔹 SHOW REAL PROJECTS AFTER LOAD
          projects.map(p => (
            <ProjectCard
              key={p.id}
              title={p.title}
              tech={p.tech}
              description={p.description}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Graphic;




/*import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectCard from "../components/ProjectCard";

function Graphic() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(data => {
      const graphicProjects = data.filter(
        project => project.category === "graphic"
      );
      setProjects(graphicProjects);
    });
  }, []);

  

  return (
    <>
      <h2 className="page-title">Graphic Design</h2>

      <div className="grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tech={project.tech}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
}

export default Graphic;
*/