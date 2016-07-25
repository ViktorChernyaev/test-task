import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FullNameInput from '../../inputs/FullName'
import EmailInput from '../../inputs/Email'
import AddressInput from '../../inputs/Address'
import AdressDetailsInput from '../../inputs/AddressDetails'
import CityInput from '../../inputs/City'
import CountryDropdown from '../../inputs/CountryDropdown'
import ZipInput from '../../inputs/Zip'

import * as validation from '../../../actions/Validation'
import * as billing from '../../../actions/Billing'


class Billing extends Component {

  render() {
    return(
      <form>
        <h2>Billing Information</h2>
        <div onClick={this.props.sameAsShipping.sameAsShipping}>same as shipping</div>
        <div className='input-group'>
          <span className='input-group__title'>Billing Contact</span>
          <FullNameInput page='billing' />
          <EmailInput page='billing' />
        </div>
        <div className='input-group'>
          <span className='input-group__title'>Billing Address</span>
          <AddressInput page='billing' />
          <AdressDetailsInput page='billing' />
          <CityInput page='billing' />
          <CountryDropdown page='billing' />
          <ZipInput page='billing' />
        </div>
        <div className='submit-btn' onClick={this.props.validation.validationBilling}>Continue</div>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    validation: bindActionCreators(validation, dispatch),
    sameAsShipping: bindActionCreators(billing, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Billing)