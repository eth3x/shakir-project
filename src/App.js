import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="./" element={<Navbar />} />
        <Route path="./about" element={<Navbar />} />
        <Route path="./services" element={<Navbar />} />
        <Route path="./contact" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
