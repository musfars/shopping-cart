import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import addToCart from '../actions';
import {Button} from 'react-materialize';
import axios from 'axios';
import '../App.css'

class ProductItem extends Component{
  render(){
    if(this.props.productDetails.quantity > 0){
      return(
        <div className="productItem">
          <Product productInfo={this.props.productDetails}/>
          <Button waves='light' onClick={() => {this.props.addToCart()}}>ADD TO CART</Button>
        </div>
      )
    }
    else{
      return(
        <div className="productItem">
          <Product productInfo={this.props.productDetails}/>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => {
      axios.post('http://10.4.6.36:4000/add_to_cart',{
        "item":
        {
          productId: ownProps.productDetails.productId,
          name: ownProps.productDetails.name,
          price: ownProps.productDetails.price,
          quantity:1
        }
      })
      .then(function (res){
        dispatch(addToCart(res.data.result))
      })
      .catch(function(err){
        console.log(err);
      });
      //dispatch(addToCart(ownProps.productDetails))
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.productsInfo
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);