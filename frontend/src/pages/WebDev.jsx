import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectCard from "../components/ProjectCard";
import SkeletonGrid from "../components/SkeletonGrid";

export default function WebDev() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then(data => {
      setProjects(data.filter(p => p.category === "webdev"));
      setLoading(false);
    });
  }, []);

  return (
    <section className="fade-up">
      <h2 className="page-title">Web Development</h2>
      <div className="grid">
        {loading ? <SkeletonGrid /> :
          projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </section>
  );
}
