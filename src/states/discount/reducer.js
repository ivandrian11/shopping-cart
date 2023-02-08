import { ActionType } from './action'

function discountReducer (discount = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_DISCOUNT:
      return action.payload.discount
    case ActionType.CLEAR_DISCOUNT:
      return null
    default:
      return discount
  }
}

export default discountReducer
