/*import { Link } from "react-router-dom";
import SkeletonGrid from "../components/SkeletonGrid";


function Home() {
  return (
    <section className="hero fade-in">
      <h2>Hi, I’m AD</h2>
      <p>Web Developer • Graphic Designer • Java Developer</p>

      <div className="cta">
        <Link to="/web-dev" className="btn primary">View Work</Link>
        <Link to="/graphic-design" className="btn secondary">Designs</Link>
      </div>
    </section>
  );
}

export default Home;
*/


import { useEffect, useState } from "react";
import SkeletonGrid from "../components/SkeletonGrid";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return (
    <section className="fade-up">
      {loading ? (
        <SkeletonGrid count={2} />
      ) : (
        <>
          <h1>Hi, I’m AD</h1>
          <p>Web Developer • Graphic Designer • Software Developer</p>
        </>
      )}
    </section>
  );
}
