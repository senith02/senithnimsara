import { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import "./index.css"
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete ={() => setIsLoaded(true)}/>}
    <div className={`min-h-screen transition-opacity duration-700 
      ${isLoaded ? 'opacity-100': 'opacity-0'}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
    </div>  
    </>
  );
}

export default App
