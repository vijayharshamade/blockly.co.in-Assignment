import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";

function App() {
  const [section, setSection] = useState("home");
  return (
    <>
      <NavigationBar active={section} onNavigate={setSection} />

      {section === "home" && <HeroSection />}
      {section === "about" && <AboutSection />}
    </>
  );
}

export default App;
