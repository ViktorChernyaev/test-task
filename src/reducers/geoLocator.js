const initialState = {
  city: '',
  country: '',
  zip: ''
}

export default function geohandling(state=initialState, action) {
  console.log(action)
  return state
}