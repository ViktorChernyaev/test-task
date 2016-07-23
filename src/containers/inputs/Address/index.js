import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetGeoData from '../../../actions/SetGeoData'

class AddressInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'form-group__span--visible' : 'form-group__span--unvisible')
    return (
      <div className='form-group'>
        <span className={checkErrors}>cannot be empty</span>
        <input
          type='text'
          placeholder='Street Address'
          onChange={this.props.action.typingAddress}
          value={this.props.state.value}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: (state.shipping.streetAddress)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SetGeoData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressInput)