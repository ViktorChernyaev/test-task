import * as FormConstants from '../constants/Payment'

const initialState = {
  cardHolderName: {value: '', status: 'UNCHECKED', error: ''},
  cardNumber: {value: '', status: 'UNCHECKED', error: ''},
  cardExpireDate: {value: '', status: 'UNCHECKED', error: ''},
  cardSecurityCode: {value: '', status: 'UNCHECKED', error: ''},
  detectedVisa: false
}

export default function shippingForm(state = initialState, action){

  switch(action.type) {

    case FormConstants.SET_CARD_HOLDER_NAME:
      if (action.value !== '') {
        return { ...state, cardHolderName: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, cardHolderName: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }
    
    case FormConstants.SET_CARD_NUMBER:
      if (action.value !== '') {
        return { ...state, cardNumber: {value: action.value, status: 'CHECKED', error: ''}, detectedVisa: false}
      } else {
        return { ...state, cardNumber: {value: '', status: 'ERROR', error: 'EMPTY'}, detectedVisa: false}
      }

    case 'DETECT_VISA': 
      if (action.value !== '') {
        return { ...state, cardNumber: {value: action.value, status: 'CHECKED', error: ''}, detectedVisa: true}
      } else {
        return { ...state, cardNumber: {value: '', status: 'ERROR', error: 'EMPTY'}, detectedVisa: false}
      }
    
    case FormConstants.SET_CARD_EXPIRE_DATE:
      if (action.value !== '') {
        return { ...state, cardExpireDate: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, cardExpireDate: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }
    
    case FormConstants.SET_CARD_SECURITY_CODE:
      if (action.value !== '') {
        return { ...state, cardSecurityCode: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, cardSecurityCode: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }


    
    default:
      return state
  }
}