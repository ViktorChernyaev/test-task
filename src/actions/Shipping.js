import Request from 'superagent'
import {
  SET_FULL_NAME_SHIPPING,
  SET_PHONE_SHIPPING,
  SET_GEO_ADDRESS_SHIPPING,
  SET_GEO_ADDRESS_MORE_SHIPPING,
  SET_GEO_CITY_SHIPPING,
  SET_GEO_COUNTRY_CLICK_SHIPPING,
  SET_GEO_COUNTRY_TYPING_SHIPPING,
  SET_GEO_ZIP_SHIPPING,
  DISPATCH_GEODATA_CITY_SHIPPING,
  DISPATCH_GEODATA_COUNTRY_SHIPPING,
  DISPATCH_GEODATA_POSTAL_CODE_SHIPPING
} from '../constants/Shipping'


export function typingName(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_FULL_NAME_SHIPPING,
      value: e.target.value
    })
  }
}


export function typingPhone(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_PHONE_SHIPPING,
      value: e.target.value
    })
  }
}

export function typingAddress(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_ADDRESS_SHIPPING,
      value: e.target.value
    })
  }
}

export function typingAddressDetails(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_ADDRESS_MORE_SHIPPING,
      value: e.target.value
    })
  }
}

export function typingCity(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_CITY_SHIPPING,
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
                  type: DISPATCH_GEODATA_CITY_SHIPPING,
                  payload: geoData.city
                })
              }
              if (geoData.country != null) {
                 dispatch({
                  type: DISPATCH_GEODATA_COUNTRY_SHIPPING,
                  payload: geoData.country
                })
              }
              if (geoData.postalCode != null) {
                dispatch({
                  type: DISPATCH_GEODATA_POSTAL_CODE_SHIPPING,
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
  return (dispatch) => {

    let url = 'https://restcountries.eu/rest/v1/all';
    let value = e.target.value;
    let valueToLower = e.target.value.toLowerCase();
    let valueLength = e.target.value.length;

    Request.get(url).then((response) => {
      let listOfCountries = [];
      let changeResultsArray = () =>{
        let arr = response.body;
        for (let arrItem of arr) {  
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
          type: SET_GEO_COUNTRY_CLICK_SHIPPING,
          value: value,
          listOfCountries: []
        })
      } else {
        dispatch({
          type: SET_GEO_COUNTRY_CLICK_SHIPPING,
          value: value,
          listOfCountries: listOfCountries
        })
      }
    })
  }
}

export function changeCountry(e) {
  return (dispatch) => {
    dispatch({
      type: SET_GEO_COUNTRY_TYPING_SHIPPING,
      value: e.target.innerText
    })
  }
}

export function typingZip(e) { 
  return (dispatch) => {
    dispatch({
      type: SET_GEO_ZIP_SHIPPING,
      value: e.target.value
    })
  }
}