import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Input from '../../components/Input'
import CountryDropdown from '../CountryDropdown'
import * as SetGeoData from '../../actions/SetGeoData'
import * as GeoLocatorActions from '../../actions/GeoLocator'


class GeoLocator extends Component {
  
  render() {
    return (
      <div>
        <div>
          <Input 
            type='text' 
            placeholder='City' 
            className='input-group__item'
            onChange={this.props.setGeoData.typingCity}
          />
          <div onClick={this.props.dispatchGeoLocator.cityTargeting}>o</div>
        </div>
        <CountryDropdown />
        <Input 
          type='text' 
          placeholder='ZIP' 
          className='input-group__item'
          onChange={this.props.setGeoData.typingZip}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    city: state.shipping.city,
    country: state.shipping.country,
    zip: state.shipping.zip
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setGeoData: bindActionCreators(SetGeoData, dispatch),
    dispatchGeoLocator: bindActionCreators(GeoLocatorActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(GeoLocator)