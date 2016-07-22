import {
	SET_GEO_ADDRESS,
	SET_GEO_ADDRESS_MORE,
	SET_GEO_CITY,
	SET_GEO_COUNTRY,
	SET_GEO_ZIP
} from '../constants/FormConstants'

export function typingAddress(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_ADDRESS,
      value: e.target.value
    })
  }
}

export function typingAddressDetails(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_ADDRESS_MORE,
      value: e.target.value
    })
  }
}

export function typingCity(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_CITY,
      value: e.target.value
    })
  }
}

export function typingCountry(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_COUNTRY,
      value: e.target.value
    })
  }
}

export function typingZip(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_ZIP,
      value: e.target.value
    })
  }
}