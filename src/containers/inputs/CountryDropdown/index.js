import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetShippingData from '../../../actions/Shipping'
import * as SetBillingData from '../../../actions/Billing'

class CountryDropdown extends Component {

  enableCountriesList() {
    this.refs.countryList.className = 'countries-list countries-list--visible'
  }
  disableCountriesList() {
    this.refs.countryList.className = 'countries-list countries-list--unvisible'
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
    let checkErrors = ((this.props.country.status == 'ERROR') ? 'check-errors' : 'check-errors check-errors--unvisible')
    return (
      <div className='form-group form-group--country'>
        <div className={checkErrors}>
          <span className='check-errors__span'>cannot be empty</span>
        </div>
        <input 
          ref='countryInput'
          type='text'
          placeholder='Country'
          value={this.props.country.value}
          onChange={checkActionType.typingCountry}
          onFocus={::this.enableCountriesList}
          onBlur={::this.disableCountriesList}
        />
        <ul ref='countryList' className='countries-list'>
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