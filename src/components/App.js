import React from 'react';
import Header from './misc/Header';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={Users} />
          <Redirect to="/"/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
