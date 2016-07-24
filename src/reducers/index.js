import { combineReducers } from 'redux'
import nav from './nav'
import shipping from './shippingPage'
import billing from './billingPage'
import payment from './PaymentPage'
import validation from './validation'

export const rootReducer = combineReducers({
  nav,
  shipping,
  billing,
  payment,
  validation
})