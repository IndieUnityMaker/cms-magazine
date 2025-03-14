import { configureStore } from '@reduxjs/toolkit'
import { api } from '../api/api'
import auth from './slices/auth-slice'
import clients from './slices/client-slice'
import products from './slices/product-slice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth,
        clients,
        products
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch