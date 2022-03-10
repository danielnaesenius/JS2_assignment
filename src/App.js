import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
