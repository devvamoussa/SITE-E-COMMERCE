import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router';
import Vetements from './pages/Vetements';
import Home from './pages/Home';



export default function App() {
  
  return (
    <div className="container-app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/vetements" element={<Vetements />} />
      </Routes>
    </div>
  )
}