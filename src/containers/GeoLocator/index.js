import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Input from '../../components/Input'
import CountryDropdown from '../CountryDropdown'
import * as SetGeoData from '../../actions/SetGeoData'


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
            value={this.props.city}
          />
          <div onClick={this.props.setGeoData.cityTargeting}>o</div>
        </div>
        <CountryDropdown value={this.props.country}/>
        <Input 
          type='text' 
          placeholder='ZIP' 
          className='input-group__item'
          onChange={this.props.setGeoData.typingZip}
          value={this.props.zip}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    city: (state.shipping.city.value || ''),
    country: (state.shipping.country.value || ''),
    zip: (state.shipping.zip.value || '')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setGeoData: bindActionCreators(SetGeoData, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(GeoLocator)