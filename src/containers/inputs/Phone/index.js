import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetShippingData from '../../../actions/Shipping'

class PhoneInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'form-group__span--visible' : 'form-group__span--unvisible')
    return (
      <div className='form-group'>
        <span className={checkErrors}>cannot be empty</span>
        <input
          type='text'
          placeholder='Phone'
          onChange={this.props.action.typingPhone}
          value={this.props.state.value}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: (state.shipping.dayTimePhone)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SetShippingData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneInput)