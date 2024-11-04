

import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const studentInfo = {
    name: "Krish Thakar",
    id: "101413517",
    college: "George Brown College, Toronto",
    course: "React JS Programming Week09 Lab exercise",
    title: "Welcome to Fullstack Development - I"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{studentInfo.title}</h1>
        <h2>{studentInfo.course}</h2>
        <p>{studentInfo.id}</p>
        <p>{studentInfo.name}</p>
        <p>{studentInfo.college}</p>
      </header>
    </div>
  );
}

export default App;
