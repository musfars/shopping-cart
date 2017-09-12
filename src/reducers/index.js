import { combineReducers } from 'redux'
import productsInfo from './productsInfo'
import populateCart from './populateCart'
import displayTotal from './displayTotal'

const shoppingCartApp = combineReducers({
  productsInfo:productsInfo,
  populateCart:populateCart,
  displayTotal:displayTotal
})

export default shoppingCartApp