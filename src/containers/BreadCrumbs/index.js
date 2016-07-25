import React, { Component } from 'react'
import NavLink from '../../components/NavLink'
import { connect } from 'react-redux'
import {
  NAV_ELEM_ACTIVE,
  NAV_ELEM_PASSED,
  NAV_ELEM_UNCHECKED
} from '../../constants/NavConstants'

class BreadCrumbs extends Component {

  render() {
    let checkNavItemState = function(state) {
      switch(state) {
        case NAV_ELEM_UNCHECKED: 
          return 'nav__link--blocked'
        case NAV_ELEM_ACTIVE: 
          return 'nav__link--active'
        case NAV_ELEM_PASSED:
          return 'nav__link--passed'
        default:
          return 'nav__link--blocked'
      }
    }
    if (this.props.navStatus === 'NAV_ENABLE') {
      return(
        <ul>
          <li>
            <NavLink 
              onlyActiveOnIndex={true}
              to='/'
              text='shipping'
              usable={checkNavItemState(this.props.shipping)}
            />
          </li>
          <li>
            <NavLink 
              to='/billing' 
              text='billing'
              usable={checkNavItemState(this.props.billing)}
            />
          </li>
          <li>
            <NavLink 
              to='/payment' 
              text='payment'
              usable={checkNavItemState(this.props.payment)}
            />
          </li>
        </ul>
      )
    } else {
      return <div></div>
    }
  }
}

function mapStateToProps(state) {
  return {
    shipping: state.validation.navigation.shipping,
    billing: state.validation.navigation.billing,
    payment: state.validation.navigation.payment,
    navStatus: state.validation.navigation.status
  }
}


export default connect(mapStateToProps)(BreadCrumbs)