import Request from 'superagent'

import {
	SET_GEO_ADDRESS,
	SET_GEO_ADDRESS_MORE,
	SET_GEO_CITY,
  SET_GEO_COUNTRY_CLICK,
	SET_GEO_COUNTRY_TYPING,
	SET_GEO_ZIP,
  DISPATCH_GEODATA_CITY,
  DISPATCH_GEODATA_COUNTRY,
  DISPATCH_GEODATA_POSTAL_CODE
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
                  type: DISPATCH_GEODATA_CITY,
                  payload: geoData.city
                })
              }
              if (geoData.country != null) {
                 dispatch({
                  type: DISPATCH_GEODATA_COUNTRY,
                  payload: geoData.country
                })
              }
              if (geoData.postalCode != null) {
                dispatch({
                  type: DISPATCH_GEODATA_POSTAL_CODE,
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
          type: SET_GEO_COUNTRY_CLICK,
          value: value,
          listOfCountries: []
        })
      } else {
        dispatch({
          type: SET_GEO_COUNTRY_CLICK,
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
      type: SET_GEO_COUNTRY_TYPING,
      value: e.target.innerText
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