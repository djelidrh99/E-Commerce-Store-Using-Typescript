import { configureStore } from '@reduxjs/toolkit'
import categories from '@store/CategoriesSlice/CategoriesSlice'
// ...

export const store = configureStore({
  reducer: {
    categories:categories,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch