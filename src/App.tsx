
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
import ThreeStart from './pages/Subpages/PartThree/ThreeStart';
import ThreeQ1 from './pages/Subpages/PartThree/ThreeQ1';
import ThreeQ1W from './pages/Subpages/PartThree/ThreeQ1W';
import ThreeT1 from './pages/Subpages/PartThree/ThreeT1';
import ThreeQ2 from './pages/Subpages/PartThree/ThreeQ2';
import ThreeQ2W from './pages/Subpages/PartThree/ThreeQ2W';
import ThreeT2 from './pages/Subpages/PartThree/ThreeT2';
import ThreeQ3 from './pages/Subpages/PartThree/ThreeQ3';
import ThreeQ3W from './pages/Subpages/PartThree/ThreeQ3W';
import ThreeT3 from './pages/Subpages/PartThree/ThreeT3';
import ThreeQ4 from './pages/Subpages/PartThree/ThreeQ4';
import ThreeQ4W from './pages/Subpages/PartThree/ThreeQ4W';
import ThreeT4 from './pages/Subpages/PartThree/ThreeT4';
import ThreeT5 from './pages/Subpages/PartThree/ThreeT5';
import FourStart from './pages/Subpages/PartFour/FourStart';
import FourQ1 from './pages/Subpages/PartFour/FourQ1';
import FourQ1W from './pages/Subpages/PartFour/FourQ1W';
import FourT1 from './pages/Subpages/PartFour/FourT1';
import FourQ2 from './pages/Subpages/PartFour/FourQ2';
import FourQ2W from './pages/Subpages/PartFour/FourQ2W';
import FourQ3 from './pages/Subpages/PartFour/FourQ3';
import FourQ3W from './pages/Subpages/PartFour/FourQ3W';
import FourT2 from './pages/Subpages/PartFour/FourT2';
import FourT3 from './pages/Subpages/PartFour/FourT3';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/mainmenupage" element={<Home/>} />
        <Route path="/instructionspage" element={<Info/>} />
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
        <Route path="/pt3start" element={<ThreeStart/>} />
        <Route path="/pt3q1" element={<ThreeQ1/>} />
        <Route path="/pt3q1w" element={<ThreeQ1W/>} />
        <Route path="/pt3t1" element={<ThreeT1/>} />
        <Route path="/pt3q2" element={<ThreeQ2/>} />
        <Route path="/pt3q2w" element={<ThreeQ2W/>} />
        <Route path="/pt3t2" element={<ThreeT2/>} />
        <Route path="/pt3q3" element={<ThreeQ3/>} />
        <Route path="/pt3q3w" element={<ThreeQ3W/>} />
        <Route path="/pt3t3" element={<ThreeT3/>} />
        <Route path="/pt3q4" element={<ThreeQ4/>} />
        <Route path="/pt3q4w" element={<ThreeQ4W/>} />
        <Route path="/pt3t4" element={<ThreeT4/>} />
        <Route path="/pt3t5" element={<ThreeT5/>} />
        <Route path="/pt4start" element={<FourStart/>} />
        <Route path="/pt4q1" element={<FourQ1/>} />
        <Route path="/pt4q1w" element={<FourQ1W/>} />
        <Route path="/pt4t1" element={<FourT1/>} />
        <Route path="/pt4q2" element={<FourQ2/>} />
        <Route path="/pt4q2w" element={<FourQ2W/>} />
        <Route path="/pt4q3" element={<FourQ3/>} />
        <Route path="/pt4q3w" element={<FourQ3W/>} />
        <Route path="/pt4t2" element={<FourT2/>} />
        <Route path="/pt4t3" element={<FourT3/>} />

        <Route path="/retry" element={<Retry/>} />
        <Route path="/endpage" element={<End/>} />
      </Routes>
    </Router>
  );
};

export default App;


