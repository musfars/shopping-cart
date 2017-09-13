import React, { Component } from 'react'
import {connect} from 'react-redux';

class Total extends Component{
  render(){
    return(
      <h2>{this.props.total}</h2>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    total: state.displayTotal
  }
}

export default connect(mapStateToProps)(Total)