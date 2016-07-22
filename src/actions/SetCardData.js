import {
	SET_CARD_HOLDER_NAME,
	SET_CARD_NUMBER,
	SET_CARD_EXPIRE_DATE,
	SET_CARD_SECURITY_CODE
} from '../constants/FormConstants'

export function typingCardHolder(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_CARD_HOLDER_NAME,
      value: e.target.value
    })
  }
}

export function typingCardNumber(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_CARD_NUMBER,
      value: e.target.value
    })
  }
}

export function typingCardExpireDate(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_CARD_EXPIRE_DATE,
      value: e.target.value
    })
  }
}

export function typingCardSecureCode(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_CARD_SECURITY_CODE,
      value: e.target.value
    })
  }
}
