import React, { Component } from 'react'
import ProductList from './ProductList'
import CartContainer from './CartContainer'

class App extends Component {
  render() {
    return (
      <div>
        <h1>SHOPPING CART</h1>
        <hr/>
        <ProductList />
        <h1>CART</h1>
        <hr/>
        <CartContainer/>
      </div>
    )
  }
}

export default App