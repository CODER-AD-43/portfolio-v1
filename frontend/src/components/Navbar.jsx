import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">AD</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/graphic-design">Graphic</Link>
        <Link to="/web-design">Web</Link>
        <Link to="/web-dev">Dev</Link>
        <Link to="/java">Java</Link>
        <Link to="/contact">Contact</Link>

      </nav>
    </header>
  );
}

export default Navbar;
