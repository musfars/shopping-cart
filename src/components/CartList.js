import React, { Component } from 'react';
import {connect} from 'react-redux';
import checkOut from '../actions/checkOut';
import {Button} from 'react-materialize';
import '../App.css'
class CartList extends Component{
  getItems() {
    if(this.props.cartItems.length===0){
        return(<h5>Cart is Empty</h5>)
    }
    return this.props.cartItems.map((item) =>
      {return(
        <div className="cartItem" key={item.productId}>
          <div className="productName">{item.name}</div>
          <div>Price: {item.price}</div>
          <div>Quantity: {item.quantity}</div>
        </div>)}
    )
    }

  getTotal(){
    var total = 0;
    if(this.props.cartItems.length===0){
      return total;
    }
    this.props.cartItems.map((item) =>
      {
        total +=(item.price * item.quantity);
      }
    )
    return total;
  }

  render(){
    return(
      <div>
        <ul>{this.getItems()}</ul>
        <div className="total">Total:{this.getTotal()}</div>
        <Button waves='light' onClick={() => {this.props.checkOut(this.getTotal())}} >CHECKOUT</Button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cartItems: state.populateCart
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkOut: (a) => {
      dispatch(checkOut(a))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartList)