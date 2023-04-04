import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './screens/Start';
import EasyPage from './screens/EasyPage';
import MediumPage from "./screens/MediumPage"
import HardPage from "./screens/HardPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartPage/>} />
        <Route path="/easy" element={<EasyPage/>} />
        <Route path="/medium" element={<MediumPage/>} />
        <Route path="/hard" element={<HardPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
