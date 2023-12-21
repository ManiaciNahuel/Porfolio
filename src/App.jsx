import "./App.css";
import { Footer } from "./components/navigation/Footer";
import { NavBar } from "./components/navigation/NavBar";
import { AboutMe } from "./components/sections/AboutMe";
import { Contact } from "./components/sections/Contact";
import { Home } from "./components/sections/Home";/* 
import { NewTry } from "./components/sections/NewTry"; */
import { Projects } from "./components/sections/Projects";

function App() {
  return (
    <>
      <NavBar />
      <div id="section">
        <Home/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
