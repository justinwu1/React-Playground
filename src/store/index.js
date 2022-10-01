import { configureStore, createSlice } from '@reduxjs/toolkit'
import DataFeed from '../DataFeed'

const initialState = { products: DataFeed }

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    search(state, action) {
      let searchTerm = action.payload
      if (searchTerm === '') {
        return
      }
      state.products = state.products.filter((item) => item.name === searchTerm)
    },
    fetch(state, action) {
      state.products = action.payload
    },
    filter(state, action) {
      if (action.payload === 'default') {
        state.products = initialState.products
      }
      state.products = sortPrice(state.products, action.payload)
    },
  },
})

const sortPrice = (data, commands) => {
  if (commands === 'H-L') {
    data.sort((a, b) => {
      return b.price - a.price
    })
  } else if (commands === 'L-H') {
    data.sort((a, b) => {
      return a.price - b.price
    })
  }
  return data
}

const store = configureStore({
  reducer: productSlice.reducer,
})

export default store
export const productsAction = productSlice.actions
