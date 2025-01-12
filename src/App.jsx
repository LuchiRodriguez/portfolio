import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <NavBar />
      <Home isScrolled={isScrolled} />
      <Experience isScrolled={isScrolled} />
      <Projects isScrolled={isScrolled} />
      <Contact isScrolled={isScrolled} />
    </>
  );
}

export default App;
