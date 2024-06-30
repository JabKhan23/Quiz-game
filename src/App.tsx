
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import Home from './pages/Home';
import Info from './pages/Info';
import End from './pages/End';
import QuestionOne from './pages/Subpages/PartOne/QuestionOne';
import Retry from './pages/Retry';
import QuestionTwo from './pages/Subpages/PartOne/QuestionTwo';
import QuestionOneWrong from './pages/Subpages/PartOne/QuestionOneWrong';
import QuestionTwoWrong from './pages/Subpages/PartOne/QuestionTwoWrong';
import PartOneEnd from './pages/Subpages/PartOne/PartOneEnd';
import QuestionOneP2 from './pages/Subpages/PartTwo/QuestionOneP2';
import QuestionOneWrongP2 from './pages/Subpages/PartTwo/QuestionOneWrongP2';
import QuestionTwoP2 from './pages/Subpages/PartTwo/QuestionTwoP2';
import QuestionTwoWrongP2 from './pages/Subpages/PartTwo/QuestionTwoWrongP2';
import QuestionThreeP2 from './pages/Subpages/PartTwo/QuestionThreeP2';
import QuestionThreeWrongP2 from './pages/Subpages/PartTwo/QuestionThreeWrongP2';
import PartTwoEnd from './pages/Subpages/PartTwo/PartTwoEnd';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/question1" element={<QuestionOne/>} />
        <Route path="/question1w" element={<QuestionOneWrong/>} />
        <Route path="/question2" element={<QuestionTwo/>} />
        <Route path="/question2w" element={<QuestionTwoWrong/>} />
        <Route path="/part1end" element={<PartOneEnd/>} />
        <Route path="/question1p2" element={<QuestionOneP2/>} />
        <Route path="/question1p2w" element={<QuestionOneWrongP2/>} />
        <Route path="/question2p2" element={<QuestionTwoP2/>} />
        <Route path="/question2p2w" element={<QuestionTwoWrongP2/>} />
        <Route path="/question3p2" element={<QuestionThreeP2/>} />
        <Route path="/question3p2w" element={<QuestionThreeWrongP2/>} />
        <Route path="/part2end" element={<PartTwoEnd/>} />
        <Route path="/retry" element={<Retry/>} />
        <Route path="/end" element={<End/>} />
      </Routes>
    </Router>
  );
};

export default App;


