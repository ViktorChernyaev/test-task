import { combineReducers } from 'redux'
import order from './order'
import nav from './nav'
import shipping from './shippingPage'
import billing from './billingPage'
import payment from './PaymentPage'
import validation from './validation'

export const rootReducer = combineReducers({
  order,
  nav,
  shipping,
  billing,
  payment,
  validation
})