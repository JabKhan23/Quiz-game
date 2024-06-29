
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
        <Route path="/retry" element={<Retry/>} />
        <Route path="/end" element={<End/>} />
      </Routes>
    </Router>
  );
};

export default App;


