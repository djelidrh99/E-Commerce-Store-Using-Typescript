import { configureStore } from '@reduxjs/toolkit'
import categories from '@store/CategoriesSlice/CategoriesSlice'
import product from '@store/Product/productSlice'
// ...

export const store = configureStore({
  reducer: {
    categories:categories,
    product:product
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch