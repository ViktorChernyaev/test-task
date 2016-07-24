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

import * as validation from '../../../actions/Validation'


class Shipping extends Component {

  render() {
    return(
      <form>
        <h2>Shipping Info</h2>
        <div className='input-group'>
          <span className='input-group__title'>Recipient</span>
          <FullNameInput page='shipping' />
          <PhoneInput page='shipping' />
        </div>
        <div className='input-group'>
          <span className='input-group__title'>Address</span>
          <AddressInput page='shipping' />
          <AdressDetailsInput page='shipping' />
          <CityInput page='shipping' />
          <CountryDropdown page='shipping' />
          <ZipInput page='shipping' />
        </div>
        <div className='submit-btn' onClick={this.props.validation.validationShipping}>Continue</div>
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
    validation: bindActionCreators(validation, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Shipping)