import React, { Component } from 'react'
import NavLink from '../../components/NavLink'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GoTo from '../../actions/NavActions'
import {
  NAV_BLOCKED,
  NAV_ACTIVE,
  NAV_PASSED
} from '../../constants/NavConstants'

class BreadCrumbs extends Component {
  gotoShipping() {
    this.props.actions.goToShipping()
  }
  gotoBilling() {
    this.props.actions.goToBilling()
  }
  gotoPayment() {
    this.props.actions.goToPayment()
  }
  gotoDonePayment() {
    this.props.actions.goToDonePayment()
  }
  render() {
    let checkNavItemState = function(state) {
      switch(state) {
        case NAV_BLOCKED: 
          return 'nav__link--blocked'
        case NAV_ACTIVE: 
          return 'nav__link--active'
        case NAV_PASSED:
          return 'nav__link--passed'
        default:
          return 'nav__link--blocked'
      }
    }
    return(
      <ul>
        <li>
          <NavLink 
            onlyActiveOnIndex={true}
            to='/'
            onClick={::this.gotoShipping}
            text='shipping'
            usable={checkNavItemState(this.props.shippingPage)}
          />
        </li>
        <li>
          <NavLink 
            to='/billing' 
            onClick={::this.gotoBilling}
            text='billing'
            usable={checkNavItemState(this.props.billingPage)}
          />
        </li>
        <li>
          <NavLink 
            to='/payment' 
            onClick={::this.gotoPayment}
            text='payment'
            usable={checkNavItemState(this.props.paymentPage)}
          />
        </li>
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    shippingPage: state.nav.shippingPage,
    billingPage: state.nav.billingPage,
    paymentPage: state.nav.paymentPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GoTo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumbs)