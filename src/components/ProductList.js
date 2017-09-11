import React, { Component } from 'react'
import {connect} from 'react-redux';
class ProductList extends Component{
  getAllProductsinfo(){
    return  this.props.products.map((item)=>{return(
      <li key={item.id}>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.quantity}</div>
        <button onClick = {dispatch(addToCart)}>Add to cart</button>
      </li>
      )});
}
  render(){
    return(
      <ul>{this.getAllProductsinfo()}</ul>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.productsInfo
  }
}

export default connect(mapStateToProps)(ProductList);