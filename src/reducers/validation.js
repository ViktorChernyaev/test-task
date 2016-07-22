const initialState = {
  shippingPage: 'INVALID',
  billingPage: 'UNCHECKED',
  paymentPage: 'UNCHECKED',
  dovePaymentPage: 'UNCHECKED'
}

export default function shippingForm(state = initialState, action) {
  
  if (action.type == 'VALID_SHIPPING'){
    return {...state, shippingPage: 'VALID'}
  } else { 
    return state
  }
}