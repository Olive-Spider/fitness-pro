// import React from 'react'

import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Class from "./pages/Class";
import Download from './pages/Download';
import Features from './pages/Features';
import Lifestyle from './pages/Lifestyle';
import Pricing from './pages/Pricing';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/class' element={<Class />} />
        <Route path='/download' element={<Download />} />
        <Route path='/features' element={<Features />} />
        <Route path='/lifestyle' element={<Lifestyle />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;