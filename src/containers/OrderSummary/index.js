import React, { Component } from 'react'
import OrderListItem from '../../components/OrderListItem'

export default class OrderSummary extends Component {
  render() {
    return (
      <div className='order-summary'>
        <h3 className='order-summary__title'>Order Summary</h3>
        <a href='#' className='order-summary__edit'>edit order</a>
        <div className='order-summary__list'>
          <OrderListItem />
        </div>
        <div className='order-summary__calc-price'>
          
        </div>
        <div className='order-summary__total'>
          
        </div>
      </div>
    )
  }
}