import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
