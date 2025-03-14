import { ProductType } from "../../types/global-types";
import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/products";
import { RootState } from "../store";

interface InitialState {
    products: ProductType[] | null
}

const initialState: InitialState = {
    products: null
}

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(productsApi.endpoints.getAllProducts.matchFulfilled, (state, action) => {
                state.products = action.payload
            })
    }
})

export default slice.reducer;

export const selectProducts = (state: RootState) => state.products;//возможна ошибка и нужно в ещё 1 вложенность войти
