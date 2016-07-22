import {
  GO_TO_SHIPPPING,
  GO_TO_BILLING,
  GO_TO_PAYMENT,
  GO_TO_DONE_PAYMENT,

  NAV_BLOCKED,
  NAV_ACTIVE,
  NAV_PASSED
} from '../constants/NavConstants'

const initialState = {
  shippingPage: NAV_ACTIVE,
  billingPage: NAV_BLOCKED,
  paymentPage: NAV_BLOCKED
}

export default function navstate(state = initialState, action) {
  switch (action.type) {
    case GO_TO_SHIPPPING:
      return {...state, shippingPage: NAV_ACTIVE, billingPage: NAV_BLOCKED, paymentPage: NAV_BLOCKED}

    case GO_TO_BILLING:
      return {...state, shippingPage: NAV_PASSED, billingPage: NAV_ACTIVE, paymentPage: NAV_BLOCKED}

    case GO_TO_PAYMENT:
      return {...state, shippingPage: NAV_PASSED, billingPage: NAV_PASSED, paymentPage: NAV_ACTIVE}

    case GO_TO_DONE_PAYMENT:
      return {...state, shippingPage: NAV_PASSED, billingPage: NAV_PASSED, paymentPage: NAV_PASSED}

    default:
      return state
    }
}