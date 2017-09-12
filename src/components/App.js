import React, { Component } from 'react'
import ProductList from './ProductList'
import CartList from './CartList'
import Total from './Total'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>SHOPPING CART</h3>
        <hr/>
        <ProductList />
        <h3>MY CART</h3>
        <hr/>
        <CartList/>
        <hr/>
        <Total/>
      </div>
    )
  }
}

export default App