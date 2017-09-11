import React, { Component } from 'react'
import ProductList from './ProductList'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <hr/>
        <ProductList />
      </div>
    )
  }
}

export default App