import { configureStore } from '@reduxjs/toolkit'
import discountReducer from './discount/reducer'
import itemsReducer from './items/reducer'

const store = configureStore({
  reducer: {
    discount: discountReducer,
    items: itemsReducer
  }
})

export default store
