import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FullNameInput from '../../inputs/FullName'
import PhoneInput from '../../inputs/Phone'
import AddressInput from '../../inputs/Address'
import AdressDetailsInput from '../../inputs/AddressDetails'
import CityInput from '../../inputs/City'
import CountryDropdown from '../../inputs/CountryDropdown'
import ZipInput from '../../inputs/Zip'

import * as validation from '../../../actions/validation'


class Shipping extends Component {

  render() {
    console.log(this.props.state)
    return(
      <form>
        <h2>Shipping Info</h2>
        <div className='input-group'>
          <span className='input-group__title'>Recipient</span>
          <FullNameInput />
          <PhoneInput />
        </div>
        <div className='input-group'>
          <span className='input-group__title'>Billing Address</span>
          <AddressInput />
          <AdressDetailsInput />
          <CityInput />
          <CountryDropdown />
          <ZipInput />
        </div>
        <div className='submit-btn' onClick={this.props.validation.validation}>Continue</div>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    name: state.shipping.fullName,
    phone: state.shipping.dayTimePhone,
    state: state
    // shippingObject: {
    //   fullName: state.shipping.fullName,
    //   dayTimePhone: state.shipping.dayTimePhone,
    //   streetAddress: state.shipping.streetAddress,
    //   moreAddress: state.shipping.moreAddress,
    //   city: state.shipping.city,
    //   country: state.shipping.country,
    //   zip: state.shipping.zip
    // }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    validation: bindActionCreators(validation, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Shipping)