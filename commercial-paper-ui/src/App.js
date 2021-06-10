import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header';
import { Route, Switch } from 'react-router'
import AuthForm from './components/authForm/authForm';
import Registration from './components/registration/Registration';
import Reg from './components/registration/Reg';
import Login from './components/logIn/logIn'

const App = () => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <AuthForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
