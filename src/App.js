import './App.css';
import React from "react";
import{
  Routes,
  Route
} from "react-router-dom";
import { Component } from 'react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import ErrorComponent from './components/ErrrorComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/people/:id" element={<People/>}/>
        <Route path ="/planets/:id" element={<Planets/>}/>
        <Route path = "/err" element={<ErrorComponent/>}/>
      </Routes>
    </div>
  );
}
export default App;





