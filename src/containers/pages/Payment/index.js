import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Input from '../../inputs/Input'
import CardNumberInput from '../../inputs/CardNumber'

import * as validation from '../../../actions/Validation'

class Payment extends Component {

  render() {
    return(
      <form className='payment-page'>
        <h2 className='form-page__title'>Payment</h2>
        <div className='secure-payment-desc'>This is a secure 128-bit SSL encrypted payment</div>
        <div className='input-group'>
          <span className='input-group__title'>Cardholder Name</span>
          <Input 
            page='payment' 
            field='cardHolderName'
            placeholder='Name as it appears on your card'
          />
        </div>
        <div className='input-group'>
          <span className='input-group__title'>Card Number</span>
          <CardNumberInput />
        </div>
        <div className='input-group input-group--small'>
          <span className='input-group__title'>Expire Date</span>
          <Input 
            page='payment' 
            field='cardExpireDate'
            placeholder='MM/YY'
          />
        </div>
        <div className='input-group input-group--small'>
          <span className='input-group__title'>Security Code</span>
          <Input 
            page='payment' 
            field='cardSecurityCode'
            placeholder=''
          />
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