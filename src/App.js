import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebarmenu from './components/Sidebarmenu'
function App() {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <Sidebarmenu></Sidebarmenu>
      </nav>

      <div id="content">
      </div>

    </div>
  );
}

export default App;
