import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardholderNameInput from '../../inputs/CardholderName'
import CardNumberInput from '../../inputs/CardNumber'
import ExpireDateInput from '../../inputs/ExpireDate'
import SecurityCodeInput from '../../inputs/SecurityCode'

import * as validation from '../../../actions/Validation'

class Payment extends Component {

  render() {
    return(
      <form className='payment-page'>
        <h2 className='form-page__title'>Payment</h2>
        <div className='secure-payment-desc'>This is a secure 128-bit SSL encrypted payment</div>
        <div className='input-group'>
          <span className='input-group__title'>Cardholder Name</span>
          <CardholderNameInput />
        </div>
        <div className='input-group'>
          <span className='input-group__title'>Card Number</span>
          <CardNumberInput />
        </div>
        <div className='input-group input-group--small'>
          <span className='input-group__title'>Expire Date</span>
          <ExpireDateInput />
        </div>
        <div className='input-group input-group--small'>
          <span className='input-group__title'>Security Code</span>
          <SecurityCodeInput />
        </div>
        <div className='form-page__submit' onClick={this.props.validation.validationPayment}>Pay Securely</div>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    validation: bindActionCreators(validation, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Payment)