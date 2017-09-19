import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Checkout from './Checkout'

export default class RouterComponent extends Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/checkout" component={Checkout}/>
        </div>
      </Router>
    )
  }
}