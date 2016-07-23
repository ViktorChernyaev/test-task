import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Shipping from './containers/pages/Shipping'
import Billing from './containers/pages/Billing'
import Payment from './containers/pages/Payment'
import DonePayment from './containers/pages/DonePayment'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Shipping} />
      <Route path='/billing' component={Billing} />
      <Route path='/payment' component={Payment} />
      <Route path='/done-payment' component={DonePayment} />
    </Route>
  </div>
)