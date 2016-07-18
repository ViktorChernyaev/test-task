import {
  GO_TO_SHIPPPING,
  GO_TO_BILLING,
  GO_TO_PAYMENT,
  GO_TO_DONE_PAYMENT
} from '../constants/NavConstants'

export function goToShipping() {
	return (dispatch) => {
		dispatch({
			type: GO_TO_SHIPPPING
		})
	}
}

export function goToBilling() {
	return (dispatch) => {
		dispatch({
			type: GO_TO_BILLING
		})
	}
}

export function goToPayment() {
	return (dispatch) => {
		dispatch({
			type: GO_TO_PAYMENT
		})
	}
}

export function goToDonePayment() {
	return (dispatch) => {
		dispatch({
			type: GO_TO_DONE_PAYMENT
		})
	}
}
