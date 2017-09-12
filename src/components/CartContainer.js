import React, { Component } from 'react';
import CartList from './CartList';

class CartContainer extends Component{
  render(){
    return(
      <div>
        <CartList/>
        <button>CHECKOUT</button>
      </div>
    )
  }
}

export default CartContainer