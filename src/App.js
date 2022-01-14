import React from 'react'
// import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponents';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}
export default App;
