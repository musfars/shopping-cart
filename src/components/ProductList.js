import React, { Component } from 'react';
import ProductItem from './ProductItem'
import {connect} from 'react-redux';
import fetchProductInfo from '../actions/fetchData';
import axios from 'axios';
class ProductList extends Component{
  getAllProductsinfo(){
    // console.log(this.props.filter);
    let newProds = this.props.products.filter( 
      (elem) => elem.price<=this.props.filter.max&&elem.price>=this.props.filter.min 
    )
  return  newProds.map((item)=>(
      <ProductItem key={item.productId} productDetails={item}/>
    ));
  }
  
  componentWillMount() {
    this.props.fetchProduct();
  }

  render(){
    return(
      <ul>
        {this.getAllProductsinfo()}
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: () => {
      axios.get('http://10.4.6.36:4000/productListing')
        .then(function(res){
          dispatch(fetchProductInfo(res.data.result));
        }).catch(function(err){
          console.error("error");
        });
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.productsInfo,
    filter:state.applyFilter
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);