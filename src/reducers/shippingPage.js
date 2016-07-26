import * as FormConstants from '../constants/Shipping'

const initialState = {
  fullName: {value: '', status: 'UNCHECKED', error: ''},
  dayTimePhone: {value: '', status: 'UNCHECKED', error: ''},
  streetAddress: {value: '', status: 'UNCHECKED', error: ''},
  moreAddress: {value: '', status: 'UNCHECKED', error: ''},
  city: {value: '', status: 'UNCHECKED', error: ''},
  country: {value: '', status: 'UNCHECKED', error: ''},
  zip: {value: '', status: 'UNCHECKED', error: ''},
  initialCountriesList: [],
  countriesList: []
}

export default function shippingForm(state = initialState, action){

  switch(action.type) {

    case FormConstants.SET_FULL_NAME_SHIPPING:
      if (action.value !== '') {
        return { ...state, fullName: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, fullName: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_PHONE_SHIPPING:
      if (action.value !== '') {
        return { ...state, dayTimePhone: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, dayTimePhone: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_ADDRESS_SHIPPING:
      if (action.value !== '') {
        return { ...state, streetAddress: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, streetAddress: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_ADDRESS_MORE_SHIPPING:
      if (action.value !== '') {
        return { ...state, moreAddress: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, moreAddress: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_CITY_SHIPPING:
      if (action.value !== '') {
        return { ...state, city: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, city: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_COUNTRY_CLICK_SHIPPING:
      if (action.value !== '') {
        return { ...state, country: {value: action.value, status: 'CHECKED', error: ''}, countriesList: action.listOfCountries}
      } else {
        return { ...state, country: {value: '', status: 'ERROR', error: 'EMPTY'}, countriesList: action.listOfCountries}
      }

    case FormConstants.SET_GEO_COUNTRY_TYPING_SHIPPING:
      if (action.value !== '') {
        return { ...state, country: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, country: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_ZIP_SHIPPING:
      if (action.value !== '') {
        return { ...state, zip: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, zip: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.DISPATCH_GEODATA_CITY_SHIPPING:
      if (action.payload != '') {
        return { ...state, city: {value: action.payload, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, city: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.DISPATCH_GEODATA_COUNTRY_SHIPPING:
      if (action.payload != '') {
        return { ...state, country: {value: action.payload, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, country: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.DISPATCH_GEODATA_POSTAL_CODE_SHIPPING:
      if (action.payload != '') {
        return { ...state, zip: {value: action.payload, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, zip: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case 'INVALID_SHIPPING':{
      var checkStatus = (obj) => {
        if (obj.status == 'UNCHECKED') {
          var newObj={
            value: obj.value,
            status: 'ERROR',
            error: 'EMPTY'
          }
          return newObj
        } else {
          return obj
        }
      }
      return {
        ...state,
        fullName: checkStatus(state.fullName),
        dayTimePhone: checkStatus(state.dayTimePhone),
        streetAddress: checkStatus(state.streetAddress),
        moreAddress: checkStatus(state.moreAddress),
        city: checkStatus(state.city),
        country: checkStatus(state.country),
        zip: checkStatus(state.zip)
      }
    }

    case 'ADD_INITIAL_COUNTRIES':{
      return {...state, initialCountriesList: action.payload}
    }

    default:
      return state
  }
}