import React, {useState} from 'react'
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About"


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  document.body.style.background = darkMode ? '#1a1a1a' : '#ffffff';
  document.body.style.color = darkMode ? '#f0f0f0' : '#111111';

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme}/>

      <Routes>
        <Route path="/" element={<Textform darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
      </Routes>
    </BrowserRouter>
  )
}
