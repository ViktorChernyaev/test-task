import { combineReducers } from 'redux'
import nav from './nav'
import shipping from './shippingPage'
import validation from './validation'

export const rootReducer = combineReducers({
  nav,
  shipping,
  validation
})