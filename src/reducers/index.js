import { combineReducers } from 'redux'
import nav from './nav'
import shipping from './shippingPage'

export const rootReducer = combineReducers({
  nav,
  shipping
})