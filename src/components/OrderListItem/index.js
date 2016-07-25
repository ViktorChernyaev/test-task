import React, { Component } from 'react'

export default class OrderListItem extends Component {
  render() {
    return (
      <div className='order-item'>
        <div className='order-item__img-wrap'>
          <div  className='order-item__img' style={{'backgroundImage': this.props.img}}/>
        </div>
        <div className='order-item__info-wrap'>
          <h5 className='order-item__name'>{this.props.name}</h5>
          <span className='order-item__info'>{this.props.description}</span>
          <span className='order-item__count'>Quantity: {this.props.quantity}</span>
        </div>
        <div className='order-item__price-wrap'>
          <span className='order-item__currency'/>
          <span className='order-item__price'>{this.props.price}</span>
        </div>
      </div>
    )
  }
}