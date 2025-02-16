import { useState, useEffect } from 'react';
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.body.classList.toggle('light-mode', !newTheme);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <Hero isDarkMode={isDarkMode}/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer isDarkMode={isDarkMode}/>
    </>
  )
}
