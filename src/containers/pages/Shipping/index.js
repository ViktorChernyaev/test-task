import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Input from '../../inputs/Input'
import CityInput from '../../inputs/City'
import CountryDropdown from '../../inputs/CountryDropdown'

import * as validation from '../../../actions/Validation'
import * as getCountries from '../../../actions/Shipping'


class Shipping extends Component {

  componentWillMount() {
    this.props.getCountries.downloadCountries()
  }

  render() {
    return(
      <form>
        <h2 className='form-page__title'>Shipping Info</h2>
        <div className='input-group'>
          <span className='input-group__title'>Recipient</span>
          <Input 
            page='shipping' 
            field='fullName'
            placeholder='Full Name'
          />
          <Input 
            page='shipping' 
            field='dayTimePhone'
            placeholder='Phone'
          />
        </div>
        <div className='input-group clearfix'>
          <span className='input-group__title'>Address</span>
          <Input 
            page='shipping' 
            field='streetAddress'
            placeholder='Street Address'
          />
          <Input 
            page='shipping' 
            field='moreAddress'
            placeholder='Apt, Suite, Bldg, GateCode (optional)'
          />
          <CityInput page='shipping' />
          <CountryDropdown page='shipping' />
          <Input 
            page='shipping' 
            field='zip'
            placeholder='ZIP'
          />
        </div>
        <div className='form-page__submit' onClick={this.props.validation.validationShipping}>Continue</div>
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
    getCountries: bindActionCreators(getCountries, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Shipping)