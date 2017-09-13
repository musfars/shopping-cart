import React, { Component } from 'react';
import '../App.css'
class Product extends Component{
  render(){
    if(this.props.productInfo.quantity>0){
      return(
      <div key={this.props.productInfo.id}>
        <div className="productName">{this.props.productInfo.name}</div>
        <div>Price: {this.props.productInfo.price}</div>
        <div>Quantity: {this.props.productInfo.quantity}</div>
      </div>
      )
    }
    else{
      return(
      <div className="soldOut" key={this.props.productInfo.id}>
        <div className="productName">{this.props.productInfo.name}</div>
        <div>Sold Out</div>
      </div>
      )
    }
  }
}

export default Product