

import React from 'react'
import './App.css';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className="App">
      <div className="SIDEBAR">
        <Sidebar />
      </div>
      <div className="MAIN">
        <Main />
      </div>
    </div>
  );
}

export default App;
