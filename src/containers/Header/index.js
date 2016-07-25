import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    let orderStatus = this.props.orderCount > 0 ? 'header__cart' : 'header__cart header__cart--hidden'
    return (
      <header>
        <div>Front-End Developer Test Task</div>
        <div>
          <span>cart</span>
          <span className={orderStatus}>{this.props.orderCount}</span>
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