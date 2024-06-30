
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
import TwoStart from './pages/Subpages/PartTwo/TwoStart';
import TwoT1 from './pages/Subpages/PartTwo/TwoT1';
import TwoQ1 from './pages/Subpages/PartTwo/TwoQ1';
import TwoQ1W from './pages/Subpages/PartTwo/TwoQ1W';
import TwoQ2 from './pages/Subpages/PartTwo/TwoQ2';
import TwoQ2W from './pages/Subpages/PartTwo/TwoQ2W';
import TwoQ3 from './pages/Subpages/PartTwo/TwoQ3';
import TwoQ3W from './pages/Subpages/PartTwo/TwoQ3W';
import TwoT2 from './pages/Subpages/PartTwo/TwoT2';


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
        <Route path="/pt2start" element={<TwoStart/>} />
        <Route path="/pt2t1" element={<TwoT1/>} />
        <Route path="/pt2q1" element={<TwoQ1/>} />
        <Route path="/pt2q1w" element={<TwoQ1W/>} />
        <Route path="/pt2q2" element={<TwoQ2/>} />
        <Route path="/pt2q2w" element={<TwoQ2W/>} />
        <Route path="/pt2q3" element={<TwoQ3/>} />
        <Route path="/pt2q3w" element={<TwoQ3W/>} />
        <Route path="/pt2t2" element={<TwoT2/>} />
        <Route path="/retry" element={<Retry/>} />
        <Route path="/end" element={<End/>} />
      </Routes>
    </Router>
  );
};

export default App;


