import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import React from 'react'
import './assets/CSS/App.css'
import HomePage from './views/HomePage/HomePage'

export default function App () {
  return (
    <>
      <Router>
        <h1 className="App">
          MERN Blog App
        </h1>
        <Switch>
          <Route 
            exact 
            path="/" 
            component={HomePage} 
          />
        </Switch>
      </Router>
    </>
  );
}