import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetCardData from '../../../actions/Payment'

class CardNumberInput extends Component {
  render() {
    let checkErrors = (this.props.state.status == 'ERROR') ?  'check-errors' : 'check-errors check-errors--unvisible'
    let visaDetect = this.props.visa ? 'visa-logo' : 'visa-logo visa-logo--invisible'
    return (
      <div className='form-group'>
        <div className={checkErrors}>
          <span className='check-errors__span'>cannot be empty</span>
        </div>
        <div className='card-number-input-wrapper'>
          <input
            type='text'
            placeholder='XXXX XXXX XXXX XXXX'
            onChange={this.props.action.typingCardNumber}
            value={this.props.state.value}
          />
          <span className={visaDetect}></span>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: state.payment.cardNumber,
    visa: state.payment.detectedVisa
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SetCardData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardNumberInput)