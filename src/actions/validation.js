export function validationShipping() { 
  return (dispatch, getState) => {
    var checkInputValues = function() {
      var state = getState().shipping
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
  }
}

export function validationBilling() { 
  return (dispatch, getState) => {
    var checkInputValues = function() {
      var state = getState().billing
      console.log(state)
      if (state.fullName.status != 'CHECKED' || state.fullName.error != '') {
        return false
      } else if (state.email.status != 'CHECKED' || state.email.error != '') {
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
          type: 'VALID_BILLING',
          payload:  {
            method: 'replace',
            nextUrl: '/payment'
          }
        })
      }
    }
    if (checkInputValues() == false) {
      dispatch({
        type: 'INVALID_BILLING'
      })
    }
  }
}

export function validationPayment() { 
  return (dispatch, getState) => {
    var checkInputValues = function() {
      var state = getState().payment
      console.log(state)
      if (state.cardHolderName.status != 'CHECKED' || state.cardHolderName.error != '') {
        return false
      } else if (state.cardNumber.status != 'CHECKED' || state.cardNumber.error != '') {
        return false
      } else if (state.cardExpireDate.status != 'CHECKED' || state.cardExpireDate.error != '') {
        return false
      } else if (state.cardSecurityCode.status != 'CHECKED' || state.cardSecurityCode.error != '') {
        return false
      } else {
        dispatch({
          type: 'VALID_PAYMENT',
          payload:  {
            method: 'replace',
            nextUrl: '/done-payment'
          }
        })
      }
    }
    if (checkInputValues() == false) {
      dispatch({
        type: 'INVALID_PAYMENT'
      })
    }
  }
}