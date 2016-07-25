import {
  SET_CARD_HOLDER_NAME,
  SET_CARD_NUMBER,
  SET_CARD_EXPIRE_DATE,
  SET_CARD_SECURITY_CODE
} from '../constants/Payment'

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
    let checkVisa = /^4[0-9]{12}(?:[0-9]{3})?$/ig
    let regExp = /^\s+/ig
    let v = e.target.value
    let check = () => {
      switch(v.length) {

        case 4: {
          let newValue = v + ' '
          dispatch({
            type: SET_CARD_NUMBER,
            value: newValue
          })
          break;
        }

        case 9: {
          let newValue = v + ' '
          dispatch({
            type: SET_CARD_NUMBER,
            value: newValue
          })
          break;
        }

        case 14: {
          let newValue = v + ' '
          dispatch({
            type: SET_CARD_NUMBER,
            value: newValue
          })
          break;
        }

        case 19: {
          if (v.match(regExp) == v.match(checkVisa)) {
            dispatch({
              type: 'DETECT_VISA',
              value: v
            })
          } else {
            dispatch({
              type: SET_CARD_NUMBER,
              value: v
            })
          }
          break;
        }
        default:
          dispatch({
            type: SET_CARD_NUMBER,
            value: v
          })
      }
    }
    check()
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
