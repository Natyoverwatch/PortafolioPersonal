import Home from "../Secciones/Home";
import AboutMe from "../Secciones/AboutMe";
import Skills from "../Secciones/Skills";
import Education from "../Secciones/Education";
import Portfolio from "../Secciones/Portfolio";
import Tutorials from "../Secciones/Tutorial";
import ContactMe from "../Secciones/Contact";
import Footer from "../Secciones/Footer";
import Test from "../Secciones/test";
import { NavBar } from "../NavBar";

export default function Page() {
  return (
    <>
      <NavBar />

      <Home />
      <div className="bg-[linear-gradient(180deg,_rgba(0,0,0,1)_5%,_rgba(53,64,130,1)_25%,_rgba(133,111,199,1)_47%,_rgba(162,131,209,1)_65%,_rgba(247,209,248,1)_100%)]">
        <Skills />
        <AboutMe />
        <Portfolio />
        <Tutorials />
        <Education />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}
