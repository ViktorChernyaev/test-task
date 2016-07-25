const initialState = {
  shippingPage: 'INVALID',
  billingPage: 'UNCHECKED',
  paymentPage: 'UNCHECKED',
  donePaymentPage: 'UNCHECKED',
  navigation: {
    status: 'NAV_ENABLE',
    shipping: 'NAV_ELEM_ACTIVE',
    billing: 'NAV_ELEM_UNCHECKED',
    payment: 'NAV_ELEM_UNCHECKED'
  },
  order: 'ENABLE'
}

export default function validation(state = initialState, action) {

  switch(action.type) {

    case 'VALID_SHIPPING':
      return {...state, 
        shippingPage: 'VALID', 
        billingPage: 'INVALID', 
        navigation: {
          status: 'NAV_ENABLE',
          shipping: 'NAV_ELEM_PASSED',
          billing: 'NAV_ELEM_ACTIVE',
          payment: 'NAV_ELEM_UNCHECKED'
        },
      }

    case 'VALID_BILLING':
      return {...state, 
        billingPage: 'VALID', 
        paymentPage: 'INVALID', 
        navigation: {
          status: 'NAV_ENABLE',
          shipping: 'NAV_ELEM_PASSED',
          billing: 'NAV_ELEM_PASSED',
          payment: 'NAV_ELEM_ACTIVE'
        },
      }

    case 'VALID_PAYMENT':
      return {...state, 
        paymentPage: 'VALID', 
        donePaymentPage: 'ACTIVE', 
        order: 'DISABLE',
        navigation: {
          status: 'NAV_DISABLE',
          shipping: 'NAV_ELEM_PASSED',
          billing: 'NAV_ELEM_PASSED',
          payment: 'NAV_ELEM_PASSED'
        },
      }

    default:
      return state
  }
}