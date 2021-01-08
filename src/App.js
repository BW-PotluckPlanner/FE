import './App.css';
import DisplayDate from './components/DisplayDate'
import EditDate from './components/EditDate'
import Event from './components/Event'
import {useEffect, useState} from 'react';
import Dashboard from './components/Dashboard';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header'



function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <hr></hr>
      </header>
        <PrivateRoute exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
    </div>
  );
}

export default App;