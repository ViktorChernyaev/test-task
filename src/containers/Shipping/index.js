import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../../components/Input'
import GeoLocator from '../GeoLocator'
import * as SetGeoData from '../../actions/SetGeoData'
import * as SetPersonalData from '../../actions/SetPersonalData'
import { bindActionCreators } from 'redux'


class Shipping extends Component {

  render() {
    // console.log(this.props.shipping)
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
        <button className='submit-btn'>Continue</button>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    name: state.shipping.fullName,
    phone: state.shipping.dayTimePhone
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPersonalData: bindActionCreators(SetPersonalData, dispatch),
    setGeoData: bindActionCreators(SetGeoData, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Shipping)