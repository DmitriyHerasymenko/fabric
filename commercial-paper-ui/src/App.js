import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header';
import { Route, Switch } from 'react-router'
import AuthForm from './components/authForm/authForm';
import Papers from './components/Papers/Papers';


const App = () => {
  const [user, setUser] = useState(false)


  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <AuthForm  user={user} setUser={setUser} />
        </Route>
        <Route path="/papers">
          <Papers user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
