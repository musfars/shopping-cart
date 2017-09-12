import React, { Component } from 'react';
import {connect} from 'react-redux';
class CartList extends Component{
  getItems() {
    console.log(this.props.cartItems)
    if(this.props.cartItems.length===0){
        return(<h3>Cart is Empty</h3>)
    }
    return this.props.cartItems.map((item) =>
      {return(
        <li>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </li>)}
    )
    }
  render(){
    return(
      <ul>{this.getItems()}</ul>
    )
  }
}

function mapStateToProps(state){
  return {
    cartItems: state.populateCart
  }
}

export default connect(mapStateToProps)(CartList)