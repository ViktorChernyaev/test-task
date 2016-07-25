export function orderToState(order) { 
  return (dispatch) => {
    dispatch({
      type: 'SEND_ORDER_DATA_TO_STATE',
      payload: order
    })
  }
}