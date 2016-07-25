const initialState = {
  shippingPage: 'INVALID',
  billingPage: 'UNCHECKED',
  paymentPage: 'UNCHECKED',
  dovePaymentPage: 'UNCHECKED'
}

export default function shippingForm(state = initialState, action) {

  switch(action.type) {

    case 'VALID_SHIPPING':
      return {...state, shippingPage: 'VALID', billingPage: 'INVALID'}

    case 'VALID_BILLING':
      return {...state, billingPage: 'VALID', paymentPage: 'INVALID'}

    case 'VALID_PAYMENT':
      return {...state, paymentPage: 'VALID', dovePaymentPage: 'ACTIVE'}

    default:
      return state
  }
}