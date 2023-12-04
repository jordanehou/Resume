//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import ReactDOM from 'react-dom';
//import './App.css';
import ParentComponent from './components/parent/ParentComponent';
//import './components/style/formStyle.css'

import { useState } from 'react';
import React from 'react';
function App() {

  return (
    <div className='app'>
      <ParentComponent/>
      
      
    </div>
  )
}

export default App;
