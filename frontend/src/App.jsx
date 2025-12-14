import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Graphic from "./pages/Graphic";
import WebDesign from "./pages/WebDesign";
import WebDev from "./pages/WebDev";
import Java from "./pages/Java";
import Contact from "./pages/Contact";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphic-design" element={<Graphic />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/java" element={<Java />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
