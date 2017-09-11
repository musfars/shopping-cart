import { combineReducers } from 'redux'
import productsInfo from './productsInfo'

const shoppingCartApp = combineReducers({
  productsInfo
})

export default shoppingCartApp