 import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetShippingData from '../../../actions/Shipping'
import * as SetBillingData from '../../../actions/Billing'

class CountryDropdown extends Component {

  enableCountriesList() {
    this.refs.countryList.className = 'country-list--visible'
  }
  disableCountriesList() {
    this.refs.countryList.className = 'country-list--unvisible'
  }
  render() {
    let checkActionType = (this.props.page == 'billing' ? this.props.SetBillingData : this.props.SetShippingData)
    var countries = this.props.countries.map((country, index) => {
      return <li 
        key={index} 
        onClick={checkActionType.changeCountry}>
        {country}
      </li>
    })
    let checkErrors = ((this.props.country.status == 'ERROR') ? 'form-group__span--visible' : 'form-group__span--unvisible')
    return (
      <div className='input-group__item'>
        <span className={checkErrors}>cannot be empty</span>
        <input 
          ref='countryInput'
          type='text'
          placeholder='Country'
          value={this.props.country.value}
          onChange={checkActionType.typingCountry}
          onFocus={::this.enableCountriesList}
          onBlur={::this.disableCountriesList}
        />
        <ul ref='countryList'>
          {countries}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  if (state.validation.shippingPage == 'INVALID' && state.validation.billingPage == 'UNCHECKED') {
    return {
      country: (state.shipping.country),
      countries: state.shipping.countriesList
    }
  } else if (state.validation.billingPage == 'INVALID' && state.validation.paymentPage == 'UNCHECKED') {
    return {
      country: (state.billing.country),
      countries: state.billing.countriesList
    }
  } else {
    return {
      country: state,
      countries: state.billing.countriesList
    }
  } 
}

function mapDispatchToProps(dispatch) {
  return {
    SetShippingData: bindActionCreators(SetShippingData, dispatch),
    SetBillingData: bindActionCreators(SetBillingData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDropdown)