import React from 'react';
import Main from './UI/Layout'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
  return (
    <BrowserRouter   >
    <Main/> 
    </BrowserRouter>
  );
}

export default App;

