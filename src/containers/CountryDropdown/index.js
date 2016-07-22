import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetGeoData from '../../actions/SetGeoData'

class CountryDropdown extends Component {
  changeValue(e) {
    this.refs.countryInput.value = e.target.innerText;
    this.refs.countryInput.blur()
  }
  enableCountriesList() {
    this.refs.countryList.className = 'country-list--visible'
  }
  disableCountriesList() {
    this.refs.countryList.className = 'country-list--unvisible'
  }
  render() {
    var countries = this.props.countries.map((country, index) => {
      return <li key={index} onClick={::this.changeValue} value={country}>{country}</li>
    })
    // console.log(this.props.country, this.props.countries)
    return (
      <div className='input-group__item'>
        <span style={{display: 'none'}}>error</span>
        <input 
          ref='countryInput'
          type='text'
          placeholder='Country'
          onChange={this.props.setGeoData.typingCountry}
          onFocus={::this.enableCountriesList}
          onBlur={::this.disableCountriesList}
        />
        <ul ref='countryList'>
          {countries}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    country: state.shipping.country,
    countries: state.shipping.countriesList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setGeoData: bindActionCreators(SetGeoData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDropdown)