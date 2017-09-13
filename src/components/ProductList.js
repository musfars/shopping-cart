import React, { Component } from 'react';
import ProductItem from './ProductItem'
import {connect} from 'react-redux';
class ProductList extends Component{
  getAllProductsinfo(){
    // console.log(this.props.filter);
    let newProds = this.props.products.filter( 
      (elem) => elem.price<=this.props.filter.max&&elem.price>=this.props.filter.min 
    )
  return  newProds.map((item)=>(
      <ProductItem key={this.props.products.id} productDetails={item}/>
    ));
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
    products: state.productsInfo,
    filter:state.applyFilter
  }
}

export default connect(mapStateToProps)(ProductList)