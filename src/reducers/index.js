import { combineReducers } from 'redux'
import nav from './nav'
import shipping from './shippingPage'
import geoLocator from './geoLocator'

export const rootReducer = combineReducers({
  nav,
  shipping,
  geoLocator
})