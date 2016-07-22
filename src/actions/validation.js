export function validation() { 
  return (dispatch, getState) => {
    var checkInputValues = function() {
      var state = getState().shipping
      console.log(state)
      if (state.fullName.status != 'CHECKED' || state.fullName.error != '') {
        return false
      } else if (state.dayTimePhone.status != 'CHECKED' || state.dayTimePhone.error != '') {
        return false
      } else if (state.streetAddress.status != 'CHECKED' || state.streetAddress.error != '') {
        return false
      } else if (state.moreAddress.status != 'CHECKED' || state.moreAddress.error != '') {
        return false
      } else if (state.city.status != 'CHECKED' || state.city.error != '') {
        return false
      } else if (state.country.status != 'CHECKED' || state.country.error != '') {
        return false
      } else if (state.zip.status != 'CHECKED' || state.zip.error != '') {
        return false
      } else {
        dispatch({
          type: 'VALID_SHIPPING',
          payload:  {
            method: 'replace',
            nextUrl: '/billing'
          }
        })
      }
    }
    if (checkInputValues() == false) {
      dispatch({
        type: 'INVALID_SHIPPING'
      })
    }
    // dispatch({
    //   type: 'VALIDATE_SHIPPING',
    //   payload: store
    // })
  }
}