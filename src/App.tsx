
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import Home from './pages/Home';
import Info from './pages/Info';
import End from './pages/End';
import OneQ1 from './pages/Subpages/PartOne/OneQ1';
import Retry from './pages/Retry';
import OneQ2 from './pages/Subpages/PartOne/OneQ2';
import OneQ1W from './pages/Subpages/PartOne/OneQ1W';
import OneQ2W from './pages/Subpages/PartOne/OneQ2W';
import OneStart from './pages/Subpages/PartOne/OneStart';
import OneT1 from './pages/Subpages/PartOne/OneT1';
import OneT2 from './pages/Subpages/PartOne/OneT2';
import OneT3 from './pages/Subpages/PartOne/OneT3';
import OneT4 from './pages/Subpages/PartOne/OneT4';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/pt1start" element={<OneStart/>} />
        <Route path="/pt1q1" element={<OneQ1/>} />
        <Route path="/pt1q1w" element={<OneQ1W/>} />
        <Route path="/pt1q2" element={<OneQ2/>} />
        <Route path="/pt1q2w" element={<OneQ2W/>} />
        <Route path="/pt1t1" element={<OneT1/>} />
        <Route path="/pt1t2" element={<OneT2/>} />
        <Route path="/pt1t3" element={<OneT3/>} />
        <Route path="/pt1t4" element={<OneT4/>} />
        <Route path="/retry" element={<Retry/>} />
        <Route path="/end" element={<End/>} />
      </Routes>
    </Router>
  );
};

export default App;


