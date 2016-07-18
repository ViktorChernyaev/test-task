import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs'
import Header from '../Header'
import OrderSummary from '../OrderSummary'

export default class App extends Component {
  render() {
    return (
      <div className='buying-form'>
        <Header />
        <div className='form-body'>
          <div className='form-groups'>
            <BreadCrumbs />
            {this.props.children}
          </div>
          <OrderSummary />
        </div>
      </div>
    )
  }
}