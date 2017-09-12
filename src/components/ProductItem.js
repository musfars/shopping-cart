import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import addToCart from '../actions'

class ProductItem extends Component{
  render(){
    return(
      <li>
        <Product productInfo={this.props.productDetails}/>
        <button onClick={() => {this.props.addToCart()}}>ADD TO CART</button>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => {
      dispatch(addToCart(ownProps.productDetails))
    }
  }
}

export default connect(null,mapDispatchToProps)(ProductItem);