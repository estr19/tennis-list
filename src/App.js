import './App.css';
import React from 'react';
import court from './tenniscourt-removebg-preview.png';
import { Tennis } from './Tennis';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <img src={court} width="400px" alt="groceries" />
      </div>
      <h1 className='container'>Are you ready for your next match?</h1>
      <h4>Click to cross the item off the list, double-click to remove the item.</h4>
      <Tennis />
    </div>
  );
}

export default App;
