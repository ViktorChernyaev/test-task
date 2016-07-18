import React, { Component } from 'react'

export default class OrderListItem extends Component {
  render() {
    return (
      <div className='order-item'>
        <div className='order-item__img-wrap'>
          <img  className='order-item__img' />
        </div>
        <div className='order-item__info-wrap'>
          <h5 className='order-item__name'>Name</h5>
          <span className='order-item__info'>Black</span>
          <span className='order-item__count'>Quantity: 1</span>
        </div>
        <div className='order-item__price-wrap'>
          <span className='order-item__currency'/>
          <span className='order-item__price'>48</span>
        </div>
      </div>
    )
  }
}