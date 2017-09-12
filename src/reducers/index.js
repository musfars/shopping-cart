import { combineReducers } from 'redux'
import productsInfo from './productsInfo'
import populateCart from './populateCart'
import displayTotal from './displayTotal'
import applyFilter from './applyFilter'

const shoppingCartApp = combineReducers({
  productsInfo:productsInfo,
  populateCart:populateCart,
  displayTotal:displayTotal,
  applyFilter:applyFilter
})

export default shoppingCartApp