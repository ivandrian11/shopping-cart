const ActionType = {
  SET_DISCOUNT: 'discount/set',
  CLEAR_DISCOUNT: 'discount/clear'
}

function setDiscountActionCreator (discount) {
  return {
    type: ActionType.SET_DISCOUNT,
    payload: { discount }
  }
}

function clearDiscountActionCreator () {
  return {
    type: ActionType.CLEAR_DISCOUNT
  }
}

export { ActionType, setDiscountActionCreator, clearDiscountActionCreator }
