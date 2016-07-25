import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import OrderListItem from '../../components/OrderListItem'
import {order} from '../../order'
import * as orderToState from '../../actions/InitialOrder'

class OrderSummary extends Component {

  componentWillMount() {
    this.props.action.orderToState(order)
  }

  render() {
    let itemsMap = this.props.items.map( (item, index) => {
      if (this.props.items !== [] ) {
        return <OrderListItem 
          key={index}
          img={item.img}
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          price={item.price}
        />
      }
    })
    let orderStatus = this.props.orderStatus === 'ENABLE' ? 'order-summary' : 'order-summary order-summary--hided'
    return (
      <div className={orderStatus}>
        <h3 className='order-summary__title'>Order Summary</h3>
        <a href='#' className='order-summary__edit'>edit order</a>
        <div className='order-summary__list'>
          {itemsMap}
        </div>
        <div className='order-summary__calc-price'>
          <span className='order-summary__key'>Subtotal</span><span className='order-summary__value price--dollar'>{this.props.prices.subtotal}</span>
          <span className='order-summary__key'>Shipping</span><span className='order-summary__value price--dollar'>{this.props.prices.shipping}</span>
          <span className='order-summary__key'>Taxes</span><span className='order-summary__value price--dollar'>{this.props.prices.taxes}</span>
        </div>
        <div className='order-summary__total'>
          <span className='order-summary__key'>Total</span><span className='order-summary__value price--dollar'>{this.props.prices.total}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    items: state.order.items,
    prices: state.order,
    orderStatus: state.validation.order
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(orderToState, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(OrderSummary)