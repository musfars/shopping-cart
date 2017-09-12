import React, { Component } from 'react';
class Product extends Component{
  render(){
    return(
    <div key={this.props.productInfo.id}>
      <div>{this.props.productInfo.name}</div>
      <div>{this.props.productInfo.price}</div>
      <div>{this.props.productInfo.quantity}</div>
    </div>
    )
  }
}

export default Product