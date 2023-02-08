import { ActionType } from './action'

function itemsReducer (items = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_ITEMS:
      return action.payload.items
    case ActionType.UPDATE_QTY_ITEM:
      return items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            qty: action.payload.qty
          }
        }
        return item
      })
    case ActionType.REMOVE_ITEM:
      return items.filter(item => item.id !== action.payload.id)
    default:
      return items
  }
}

export default itemsReducer
