import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component{
  render(){
    return(
      <h2>Please pay Rs.{this.props.total}</h2>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    total: state.displayTotal
  }
}

export default connect(mapStateToProps)(Checkout)