import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screen/home';
import Pricing from './screen/Pricing';
import { Solutions } from './screen/Solutions';




function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Pricing" element={<Pricing/>} />
        <Route path="/Solutions" element={<Solutions/>}/>
      </Routes>
    </Router>
  );
}

export default App;
