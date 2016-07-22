import * as FormConstants from '../constants/FormConstants'

const initialState = {
  fullName: '',
  dayTimePhone: '',
  streetAddress: '',
  moreAddress: '',
  city: '',
  country: '',
  zip: '',
  countriesList: [],
  geoPosition: {}
}

export default function shippingForm(state = initialState, action){

  switch(action.type) {

    case FormConstants.SET_FULL_NAME:
      return { ...state, fullName: action.value }

    case FormConstants.SET_PHONE:
      return { ...state, dayTimePhone: action.value }

    case FormConstants.SET_GEO_ADDRESS:
      return { ...state, streetAddress: action.value }

    case FormConstants.SET_GEO_ADDRESS_MORE:
      return { ...state, moreAddress: action.value }

    case FormConstants.DISPATCH_GEODATA_CITY:
      return { ...state, city: action.payload }

    case FormConstants.DISPATCH_GEODATA_COUNTRY:
      return { ...state, country: action.payload }

    case FormConstants.DISPATCH_GEODATA_POSTAL_CODE:
      return { ...state, zip: action.payload }

    case FormConstants.SET_GEO_CITY:
      return { ...state, city: action.value }

    case FormConstants.SET_GEO_COUNTRY_CLICK:
      return { ...state, country: action.value, countriesList: action.listOfCountries }

    case FormConstants.SET_GEO_COUNTRY_TYPING:
      return { ...state, country: action.value }

    case FormConstants.SET_GEO_ZIP:
      return { ...state, zip: action.value }

    default:
      return state
  }
}