import * as FormConstants from '../constants/FormConstants'

const initialState = {
  fullName: {value: '', status: 'UNCHECKED', error: ''},
  dayTimePhone: {value: '', status: 'UNCHECKED', error: ''},
  streetAddress: {value: '', status: 'UNCHECKED', error: ''},
  moreAddress: {value: '', status: 'UNCHECKED', error: ''},
  city: {value: '', status: 'UNCHECKED', error: ''},
  country: {value: '', status: 'UNCHECKED', error: ''},
  zip: {value: '', status: 'UNCHECKED', error: ''},
  countriesList: []
}

export default function shippingForm(state = initialState, action){

  switch(action.type) {

    case FormConstants.SET_FULL_NAME:
      if (action.value !== '') {
        return { ...state, fullName: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, fullName: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_PHONE:
      if (action.value !== '') {
        return { ...state, dayTimePhone: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, dayTimePhone: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_ADDRESS:
      if (action.value !== '') {
        return { ...state, streetAddress: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, streetAddress: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_ADDRESS_MORE:
      if (action.value !== '') {
        return { ...state, moreAddress: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, moreAddress: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_CITY:
      if (action.value !== '') {
        return { ...state, city: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, city: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_COUNTRY_CLICK:
      if (action.value !== '') {
        return { ...state, country: {value: action.value, status: 'CHECKED', error: ''}, countriesList: action.listOfCountries}
      } else {
        return { ...state, country: {value: '', status: 'ERROR', error: 'EMPTY'}, countriesList: action.listOfCountries}
      }

    case FormConstants.SET_GEO_COUNTRY_TYPING:
      if (action.value !== '') {
        return { ...state, country: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, country: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_ZIP:
      if (action.value !== '') {
        return { ...state, zip: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, zip: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.DISPATCH_GEODATA_CITY:
      if (action.payload != '') {
        return { ...state, city: {value: action.payload, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, city: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.DISPATCH_GEODATA_COUNTRY:
      if (action.payload != '') {
        return { ...state, country: {value: action.payload, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, country: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.DISPATCH_GEODATA_POSTAL_CODE:
      if (action.payload != '') {
        return { ...state, zip: {value: action.payload, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, zip: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }      

    default:
      return state
  }
}