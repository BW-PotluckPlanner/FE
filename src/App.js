import './App.css';
import DisplayDate from './components/DisplayDate'
import EditDate from './components/EditDate'
import Event from './components/Event'
import {useEffect, useState} from 'react';
import Dashboard from './components/Dashboard';
import { Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header'



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <hr></hr>
      </header>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
    </div>
  );
}

export default App;