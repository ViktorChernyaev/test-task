import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../../components/Input'
import GeoLocator from '../GeoLocator'
import * as SetGeoData from '../../actions/SetGeoData'
import * as SetPersonalData from '../../actions/SetPersonalData'
import { bindActionCreators } from 'redux'
import * as validation from '../../actions/validation'


class Shipping extends Component {

  render() {
    console.log(this.props.state)
    return(
      <form>
        <h2>Shipping Info</h2>
        <div className='input-group'>
          <span className='input-group__title'>Recipient</span>
          <Input 
            type='text' 
            placeholder='Full Name' 
            className='input-group__item'
            onChange={this.props.setPersonalData.typingName}
          />
          <Input 
            type='text' 
            placeholder='Daytime Phone' 
            className='input-group__item'
            onChange={this.props.setPersonalData.typingPhone}
          />
        </div>
        <div className='input-group'>
          <span className='input-group__title'>Billing Address</span>
          <Input 
            type='text' 
            placeholder='Street Address' 
            className='input-group__item'
            onChange={this.props.setGeoData.typingAddress}
          />
           <Input 
            type='text' 
            placeholder='Apt, Suite, Bldg, Gate Code. (optional)' 
            className='input-group__item'
            onChange={this.props.setGeoData.typingAddressDetails}
          />
          <GeoLocator />
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
    setPersonalData: bindActionCreators(SetPersonalData, dispatch),
    setGeoData: bindActionCreators(SetGeoData, dispatch),
    validation: bindActionCreators(validation, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Shipping)