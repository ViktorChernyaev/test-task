import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Input from '../../inputs/Input'
import CityInput from '../../inputs/City'
import CountryDropdown from '../../inputs/CountryDropdown'

import * as validation from '../../../actions/Validation'
import * as billing from '../../../actions/Billing'


class Billing extends Component {

  render() {
    return(
      <form>
        <div className='billing-title-wrap'>
          <h2 className='form-page__title'>Billing Information</h2>
          <div onClick={this.props.sameAsShipping.sameAsShipping} className='same-as-shipping'>same as shipping</div>
        </div>
        <div className='input-group'>
          <span className='input-group__title'>Billing Contact</span>
          <Input 
            page='billing' 
            field='fullName'
            placeholder='Full Name'
          />
          <Input 
            page='billing' 
            field='email'
            placeholder='Email'
          />
        </div>
        <div className='input-group clearfix'>
          <span className='input-group__title'>Billing Address</span>
          <Input 
            page='billing' 
            field='streetAddress'
            placeholder='Street Address'
          />
          <Input 
            page='billing' 
            field='moreAddress'
            placeholder='Apt, Suite, Bldg, GateCode (optional)'
          />
          <CityInput page='billing' />
          <CountryDropdown page='billing' />
          <Input 
            page='billing' 
            field='zip'
            placeholder='ZIP'
          />
        </div>
        <div className='form-page__submit' onClick={this.props.validation.validationBilling}>Continue</div>
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