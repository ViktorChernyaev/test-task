import Request from 'superagent'

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
          type: SET_GEO_COUNTRY,
          value: value,
          listOfCountries: []
        })
      } else {
        dispatch({
          type: SET_GEO_COUNTRY,
          value: value,
          listOfCountries: listOfCountries
        })
      }
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