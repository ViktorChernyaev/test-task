import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    let orderStatus = this.props.orderCount > 0 ? 'form-header__card-count' : 'form-header__card-count form-header__card-count--hidden'
    return (
      <header className='form-header clearfix'>
        <div className='form-header__logo'></div>
        <div className='form-header__title'>Front-End Developer Test Task</div>
        <div className='form-header__card'>
          <span>cart</span>
          <span className='form-header__card-icon'>
            <span className={orderStatus}>{this.props.orderCount}</span>
          </span>
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    orderCount: state.order.count
  }
}

export default connect(mapStateToProps)(Header)