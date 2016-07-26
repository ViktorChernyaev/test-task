import Request from 'superagent'
import {
  SET_FULL_NAME_BILLING,
  SET_EMAIL_BILLING,

  SET_GEO_ADDRESS_BILLING,
  SET_GEO_ADDRESS_MORE_BILLING,
  SET_GEO_CITY_BILLING,
  SET_GEO_COUNTRY_CLICK_BILLING,
  SET_GEO_COUNTRY_TYPING_BILLING,
  SET_GEO_ZIP_BILLING,

  DISPATCH_GEODATA_CITY_BILLING,
  DISPATCH_GEODATA_COUNTRY_BILLING,
  DISPATCH_GEODATA_POSTAL_CODE_BILLING,

  SET_GEO_AS_SHIPPING
} from '../constants/Billing'


export function typingName(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_FULL_NAME_BILLING,
      value: e.target.value
    })
  }
}


export function typingEmail(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_EMAIL_BILLING,
      value: e.target.value
    })
  }
}

export function typingAddress(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_ADDRESS_BILLING,
      value: e.target.value
    })
  }
}

export function typingAddressDetails(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_ADDRESS_MORE_BILLING,
      value: e.target.value
    })
  }
}

export function typingCity(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_CITY_BILLING,
      value: e.target.value
    })
  }
}

export function cityTargeting() {
  return (dispatch) => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          let coords = (+latitude+','+longitude)
          let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+coords+'&result_type=postal_code|country|sublocality&key=AIzaSyA9mUA-t36d_Z3VJBtLn5pNdA-pEiMlzow';
          Request.get(url).then((response) => {
            var arr = response.body.results
            let setGeoData = (arr, arg) => {
              for (let arrItems of arr) {
                for (let argumentComponents of arrItems.address_components) {
                  for(let i of argumentComponents.types) {
                    if (i === arg) {
                      return argumentComponents.long_name
                    }
                  }
                }
              }
            }
            let geoData = {
              city: setGeoData(arr, 'locality'),
              country: setGeoData(arr, 'country'),
              postalCode: setGeoData(arr, 'postal_code')
            }
            let dispatchGeoData = function() {
              if (geoData.city != null) {
                dispatch({
                  type: DISPATCH_GEODATA_CITY_BILLING,
                  payload: geoData.city
                })
              }
              if (geoData.country != null) {
                 dispatch({
                  type: DISPATCH_GEODATA_COUNTRY_BILLING,
                  payload: geoData.country
                })
              }
              if (geoData.postalCode != null) {
                dispatch({
                  type: DISPATCH_GEODATA_POSTAL_CODE_BILLING,
                  payload: geoData.postalCode
                })
              }
            }
            dispatchGeoData();
          })
        })
      } else {
        console.log('not supported geolocation')
      }
    }
    getLocation()
  }
}

export function typingCountry(e) {
  return (dispatch, getState) => {
    let state = getState();
    let list = state.shipping.initialCountriesList
    let value = e.target.value;
    let valueToLower = e.target.value.toLowerCase();
    let valueLength = e.target.value.length;
    let listOfCountries = [];

    let changeResultsArray = () => {
      for (let arrItem of list) {  
        if (listOfCountries.length < 10) {      
          if (valueToLower == (arrItem.name.toLowerCase().slice(0, valueLength))) {
            listOfCountries.push(arrItem.name)
          }
        }
      }
    }
    changeResultsArray()
    
    if (value == '') {
      dispatch({
        type: SET_GEO_COUNTRY_CLICK_BILLING,
        value: value,
        listOfCountries: []
      })
    } else {
      dispatch({
        type: SET_GEO_COUNTRY_CLICK_BILLING,
        value: value,
        listOfCountries: listOfCountries
      })
    }
  }
}

export function changeCountry(e) {
  return (dispatch) => {
    dispatch({
      type: SET_GEO_COUNTRY_TYPING_BILLING,
      value: e.target.innerText
    })
  }
}

export function typingZip(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_ZIP_BILLING,
      value: e.target.value
    })
  }
}

export function sameAsShipping() {
  return (dispatch, getState) => {
    let state = getState();
    dispatch({
      type: SET_GEO_AS_SHIPPING,
      payload: state
    })
  }
}