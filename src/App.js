import './App.css';
import DisplayDate from './components/DisplayDate'
import EditDate from './components/EditDate'
import Event from './components/Event'
import {useEffect, useState} from 'react';
import Dashboard from './components/Dashboard';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Potluck Planner</h1>
        <hr></hr>
      </header>
        <Dashboard/>
    </div>
  );
}

export default App;
