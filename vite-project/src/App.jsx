import React from "react";
import About from './components/About'
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
  <>
  <Navbar/>
  <Main/>
  <About/>
  <Skills/>
  <Projects/>
      {/* <Routes>
        <Route path='/about' element={<About />} />
      </Routes> */}
  </>
  )
}

export default App;
