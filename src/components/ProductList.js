import React, { Component } from 'react';
import ProductItem from './ProductItem'
import {connect} from 'react-redux';
class ProductList extends Component{
  getAllProductsinfo(){
  return  this.props.products.map((item)=>{
    return <ProductItem key={this.props.products.id} productDetails={item}/>
    });
  }

  render(){
    return(
      <ul>
        {this.getAllProductsinfo()}
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.productsInfo
  }
}

export default connect(mapStateToProps)(ProductList)