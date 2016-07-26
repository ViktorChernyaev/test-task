import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetShippingData from '../../../actions/Shipping'
import * as SetBillingData from '../../../actions/Billing'
import * as SetPaymentData from '../../../actions/Payment'

class Input extends Component {
  render() {
    let checkErrors = (obj) => {
      if (obj.status === 'ERROR' || obj.error === 'EMPTY') {
        return 'check-errors'
      } else {
        return 'check-errors check-errors--unvisible'
      }
    }
    let kek = () => {
      if (this.props.page === 'shipping') {

        switch(this.props.field) {
          case 'fullName':
            return {action: this.props.SetShippingData.typingName, value: this.props.shipping.fullName.value, error: checkErrors(this.props.shipping.fullName)}

          case 'dayTimePhone':
            return {action: this.props.SetShippingData.typingPhone, value: this.props.shipping.dayTimePhone.value, error: checkErrors(this.props.shipping.dayTimePhone)}

          case 'streetAddress':
            return {action: this.props.SetShippingData.typingAddress, value: this.props.shipping.streetAddress.value, error: checkErrors(this.props.shipping.streetAddress)}

          case 'moreAddress':
            return {action: this.props.SetShippingData.typingAddressDetails, value: this.props.shipping.moreAddress.value, error: checkErrors(this.props.shipping.moreAddress)}

          case 'zip':
            return {action: this.props.SetShippingData.typingZip, value: this.props.shipping.zip.value, error: checkErrors(this.props.shipping.fullName)}

          default:
            console.log('error')
        }

      } else if (this.props.page === 'billing') {

        switch(this.props.field) {
          case 'fullName':
            return {action: this.props.SetBillingData.typingName, value: this.props.billing.fullName.value, error: checkErrors(this.props.billing.fullName)}

          case 'email':
            return {action: this.props.SetBillingData.typingEmail, value: this.props.billing.email.value, error: checkErrors(this.props.billing.email)}

          case 'streetAddress':
            return {action: this.props.SetBillingData.typingAddress, value: this.props.billing.streetAddress.value, error: checkErrors(this.props.billing.streetAddress)}

          case 'moreAddress':
            return {action: this.props.SetBillingData.typingAddressDetails, value: this.props.billing.moreAddress.value, error: checkErrors(this.props.billing.moreAddress)}

          case 'zip':
            return {action: this.props.SetBillingData.typingZip, value: this.props.billing.zip.value, error: checkErrors(this.props.billing.zip)}

          default:
            console.log('error')
        }
      } else if (this.props.page === 'payment') {

        switch(this.props.field) {
          case 'cardHolderName':
            return {action: this.props.SetPaymentData.typingCardHolder, value: this.props.payment.cardHolderName.value, error: checkErrors(this.props.payment.cardHolderName)}

          case 'cardExpireDate':
            return {action: this.props.SetPaymentData.typingCardExpireDate, value: this.props.payment.cardExpireDate.value, error: checkErrors(this.props.payment.cardExpireDate)}

          case 'cardSecurityCode':
            return {action: this.props.SetPaymentData.typingCardSecureCode, value: this.props.payment.cardSecurityCode.value, error: checkErrors(this.props.payment.cardSecurityCode)}
            
          default:
            console.log('error')
        }
      }
    }
    return (
      <div className='form-group'>
        <div className={kek().error}>
          <span className='check-errors__span'>cannot be empty</span>
        </div>
        <input
          type='text'
          placeholder={this.props.placeholder}
          onChange={kek().action}
          value={kek().value}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    shipping: state.shipping,
    billing: state.billing,
    payment: state.payment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    SetShippingData: bindActionCreators(SetShippingData, dispatch),
    SetBillingData: bindActionCreators(SetBillingData, dispatch),
    SetPaymentData: bindActionCreators(SetPaymentData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)