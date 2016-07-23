import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetGeoData from '../../../actions/SetGeoData'

class CityInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'form-group__span--visible' : 'form-group__span--unvisible')
    return (
      <div className='form-group'>
        <span className={checkErrors}>cannot be empty</span>
        <input
          type='text'
          placeholder='City'
          onChange={this.props.action.typingCity}
          value={this.props.state.value}
        />
        <div onClick={this.props.action.cityTargeting}>o</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: (state.shipping.city)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SetGeoData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityInput)