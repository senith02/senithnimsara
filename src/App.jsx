import { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import "./index.css"
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from './components/Home';

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
    </div>  
    </>
  );
}

export default App
