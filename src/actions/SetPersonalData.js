import {
	SET_FULL_NAME,
	SET_PHONE,
	SET_EMAIL
} from '../constants/FormConstants'

export function typingName(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_FULL_NAME,
      value: e.target.value
    })
  }
}

export function typingPhone(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_PHONE,
      value: e.target.value
    })
  }
}

export function typingEmail(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_EMAIL,
      value: e.target.value
    })
  }
}