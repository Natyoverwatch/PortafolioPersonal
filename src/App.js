import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from "./components/Homescreen/index";
import './App.css';
import Home from './components/Secciones/Home';
import AboutMe from './components/Secciones/AboutMe';
import Skills from './components/Secciones/Skills';
import Portfolio from './components/Secciones/Portfolio';
import Tutorial from './components/Secciones/Tutorial';
import Contact from './components/Secciones/Contact';
import Footer from './components/Secciones/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Aboutme" element={<AboutMe />} />
        <Route path="/Potafolio" element={<Portfolio />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Tutorials" element={<Tutorial />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
