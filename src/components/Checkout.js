import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';

class Checkout extends Component{
  render(){
    return(
      <div className="App">
        <h3>SHOPPING CART</h3>
        <hr/>
        <div className="checkoutTotal">Please pay Rs.{this.props.total}</div>
      </div>
      
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    total: state.displayTotal
  }
}

export default connect(mapStateToProps)(Checkout)