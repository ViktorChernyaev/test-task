import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetBillingData from '../../../actions/Billing'

class EmailInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'check-errors' : 'check-errors check-errors--unvisible')
    return (
      <div className='form-group'>
        <div className={checkErrors}>
          <span className='check-errors__span'>cannot be empty</span>
        </div>
        <input
          type='text'
          placeholder='Email Address'
          onChange={this.props.action.typingEmail}
          value={this.props.state.value}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: (state.billing.email)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SetBillingData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailInput)