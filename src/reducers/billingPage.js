import * as FormConstants from '../constants/Billing'

const initialState = {
  fullName: {value: '', status: 'UNCHECKED', error: ''},
  email: {value: '', status: 'UNCHECKED', error: ''},
  streetAddress: {value: '', status: 'UNCHECKED', error: ''},
  moreAddress: {value: '', status: 'UNCHECKED', error: ''},
  city: {value: '', status: 'UNCHECKED', error: ''},
  country: {value: '', status: 'UNCHECKED', error: ''},
  zip: {value: '', status: 'UNCHECKED', error: ''},
  countriesList: []
}

export default function shippingForm(state = initialState, action){

  switch(action.type) {

    case FormConstants.SET_FULL_NAME_BILLING:
      if (action.value !== '') {
        return { ...state, fullName: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, fullName: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_EMAIL_BILLING:
      if (action.value !== '') {
        return { ...state, email: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, email: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_ADDRESS_BILLING:
      if (action.value !== '') {
        return { ...state, streetAddress: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, streetAddress: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_ADDRESS_MORE_BILLING:
      if (action.value !== '') {
        return { ...state, moreAddress: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, moreAddress: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_CITY_BILLING:
      if (action.value !== '') {
        return { ...state, city: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, city: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_COUNTRY_CLICK_BILLING:
      if (action.value !== '') {
        return { ...state, country: {value: action.value, status: 'CHECKED', error: ''}, countriesList: action.listOfCountries}
      } else {
        return { ...state, country: {value: '', status: 'ERROR', error: 'EMPTY'}, countriesList: action.listOfCountries}
      }

    case FormConstants.SET_GEO_COUNTRY_TYPING_BILLING:
      if (action.value !== '') {
        return { ...state, country: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, country: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.SET_GEO_ZIP_BILLING:
      if (action.value !== '') {
        return { ...state, zip: {value: action.value, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, zip: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.DISPATCH_GEODATA_CITY_BILLING:
      if (action.payload != '') {
        return { ...state, city: {value: action.payload, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, city: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.DISPATCH_GEODATA_COUNTRY_BILLING:
      if (action.payload != '') {
        return { ...state, country: {value: action.payload, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, country: {value: '', status: 'ERROR', error: 'EMPTY'}}
      }

    case FormConstants.DISPATCH_GEODATA_POSTAL_CODE_BILLING:
      if (action.payload != '') {
        return { ...state, zip: {value: action.payload, status: 'CHECKED', error: ''}}
      } else {
        return { ...state, zip: {value: '', status: 'ERROR', error: 'EMPTY'}}
      } 

    case FormConstants.SET_GEO_AS_SHIPPING:{
      let shipping = action.payload.shipping;
      return  {...state, fullName: {value: shipping.fullName.value, status: shipping.fullName.status, error: shipping.fullName.error}, streetAddress: {value: shipping.streetAddress.value, status: shipping.streetAddress.status, error: shipping.streetAddress.error}, moreAddress: {value: shipping.moreAddress.value, status: shipping.moreAddress.status, error: shipping.moreAddress.error}, city: {value: shipping.city.value, status: shipping.city.status, error: shipping.city.error}, country: {value: shipping.country.value, status: shipping.country.status, error: shipping.country.error}, zip: {value: shipping.zip.value, status: shipping.zip.status, error: shipping.zip.error}
      }
    }

    default:
      return state
  }
}