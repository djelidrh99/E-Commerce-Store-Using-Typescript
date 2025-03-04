import { configureStore, combineReducers } from '@reduxjs/toolkit'
import categories from '@store/CategoriesSlice/CategoriesSlice'
import product from '@store/Product/productSlice'
import cart from '@store/Cart/cartSlice'
import { persistStore, persistReducer, FLUSH, PURGE, REGISTER, PERSIST, PAUSE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// ...
const itemIdCart = {
  key: 'cart',
  storage: storage,
  whitelist: ['itemId']
}


const rootReducer = combineReducers({
  categories:categories,
    product:product,
    cart:persistReducer(itemIdCart,cart)
})



export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefualtMiddleware)=>
    getDefualtMiddleware({
      serializableCheck :{
        ignoredActions:[FLUSH,PURGE,REGISTER,PERSIST,PAUSE]
      }
    })
})

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch