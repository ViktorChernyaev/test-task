import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { rootReducer } from '../reducers/index'
import { billingRedirect, paymentRedirect, donePaymentRedirect } from '../middlewares/redirect'

export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger()),
    applyMiddleware(billingRedirect),
    applyMiddleware(paymentRedirect),
    applyMiddleware(donePaymentRedirect)
  )(createStore)(rootReducer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}