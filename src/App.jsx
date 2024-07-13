import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/navigation/Footer";
import { NavBar } from "./components/navigation/NavBar";
import { AboutMe } from "./components/sections/AboutMe";
import { Contact } from "./components/sections/Contact";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";

function App() {
  return (
    <Router>
      <NavBar />
      <div id="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
