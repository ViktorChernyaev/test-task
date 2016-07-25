const initialState = {
  items: [],
  shipping: '',
  count: '',
  subtotal: '',
  taxes: '',
  total: ''
}

export default function navstate(state = initialState, action) {
  if (action.type === 'SEND_ORDER_DATA_TO_STATE') {
    let t = action.payload
    return {...state, items: t.items, shipping: t.shipping, count: t.count, subtotal: t.subtotal, taxes: t.taxes, total: t.total}
  } else {
    return state
  }
}