import React from 'react';
import logo from './logo.svg';
import './App.css';

//import components

import Home from "./components/Home"
import NoMatch from "./components/NoMatch"
import Character from './components/Character'

// add imports 
import {Route, Switch} from 'react-router-dom'


//add props as an argument
function App(props) {

  console.log('route',Route)
 console.log('switch',Switch)

  return (
    <div className="App">
      {/* add Switch notice that the no match component isn't rendering. */}
      <Switch>

        <Route exact path='/home' render={rProps => <Home {...rProps} /> } />
        <Route exact path='/:name' render={rProps => <Character {...rProps} /> } />
        <Route path component={NoMatch} />

      </Switch>
    </div>
  );
}

export default App;

