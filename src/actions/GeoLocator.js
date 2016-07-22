import Request from 'superagent'

export function cityTargeting() {
  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition)
  //   } else {
  //     console.log('not supported geolocation')
  //   }
  // }
  function showPosition(position) {
    console.log(position)
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let coords = (+latitude+','+longitude)
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+coords+'&result_type=postal_code|country|sublocality&key=AIzaSyA9mUA-t36d_Z3VJBtLn5pNdA-pEiMlzow';
    return url
  }
  // var kek = getLocation()
  var kekus = Request.get(navigator.geolocation.getCurrentPosition(showPosition)).then((response) => {
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
    var geoData = {
      city: setGeoData(arr, 'locality'),
      country: setGeoData(arr, 'country'),
      postalCode: setGeoData(arr, 'postal_code')
    }
    return geoData
  })
  console.log(kekus)
  return (dispatch) => {
    dispatch({
      type: 'DISPATCH_GEODATA',
      payload: 'geoData'
    })
  }
}
