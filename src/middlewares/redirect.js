import { browserHistory } from 'react-router'

export const billingRedirect = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type === 'VALID_SHIPPING') {
    browserHistory[action.payload.method](action.payload.nextUrl)
  }
  return next(action)
}

export const paymentRedirect = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type === 'VALID_BILLING') {
    browserHistory[action.payload.method](action.payload.nextUrl)
  }
  return next(action)
}