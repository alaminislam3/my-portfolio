import "./App.css";
import Aboutme from "./Component/Aboutme";
import ContactUs from "./Component/ContactUs";
import Education from "./Component/Education";
import Experience from "./Component/Exprience";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import ProjectSection from "./Component/Project";
import Skills from "./Component/Skills";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection> </HeroSection>
      <Skills></Skills>
      <Aboutme></Aboutme>
      <Education></Education>
      <Experience></Experience>
      <ProjectSection></ProjectSection>
      <ContactUs></ContactUs>
    </>
  );
}

export default App;
