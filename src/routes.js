import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Shipping from './containers/Shipping'
import Billing from './containers/Billing'
import Payment from './containers/Payment'
import DonePayment from './containers/DonePayment'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Shipping} />
      <Route path='/billing' component={Billing} />
      <Route path='/payment' component={Payment} />
      <Route path='/done-payment' component={DonePayment} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)