const ActionType = {
  SET_ITEMS: 'items/set',
  UPDATE_QTY_ITEM: 'item/updateQty',
  REMOVE_ITEM: 'item/remove'
}

function setItemsActionCreator (items) {
  return {
    type: ActionType.SET_ITEMS,
    payload: { items }
  }
}

function updateQtyItemActionCreator (id, qty) {
  return {
    type: ActionType.UPDATE_QTY_ITEM,
    payload: { id, qty }
  }
}

function removeItemActionCreator (id) {
  console.log(id)
  return {
    type: ActionType.REMOVE_ITEM,
    payload: { id }
  }
}

export {
  ActionType,
  setItemsActionCreator,
  updateQtyItemActionCreator,
  removeItemActionCreator
}
