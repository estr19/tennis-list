import './App.css';
import React from 'react';
import court from './tenniscourt-removebg-preview.png';
import { Tennis } from './Tennis';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <img src={court} width="300px" alt="groceries" />
      </div>
      <h1 className='container'>This is your errand runner!</h1>
      <h4>Type up your errand, then hit "Enter" or click the "Add" button. Click on the item to mark it "done" and move it to the bottom.</h4>
      <Tennis />
    </div>
  );
}

export default App;
