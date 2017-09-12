import { combineReducers } from 'redux'
import productsInfo from './productsInfo'
import populateCart from './populateCart'

const shoppingCartApp = combineReducers({
  productsInfo:productsInfo,
  populateCart:populateCart
})

export default shoppingCartApp