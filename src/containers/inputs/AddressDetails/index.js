import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetGeoData from '../../../actions/SetGeoData'

class AddressDetailsInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'form-group__span--visible' : 'form-group__span--unvisible')
    return (
      <div className='form-group'>
        <span className={checkErrors}>cannot be empty</span>
        <input
          type='text'
          placeholder='Apt, Suite, Bldg, GateCode (optional)'
          onChange={this.props.action.typingAddressDetails}
          value={this.props.state.value}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: (state.shipping.moreAddress)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SetGeoData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressDetailsInput)