import { ClientType } from "../../types/global-types";
import { createSlice } from "@reduxjs/toolkit";
import { clientsApi } from "../../api/clients";
import { RootState } from "../store";

interface InitialState {
    clients: ClientType[] | null
}

const initialState: InitialState = {
    clients: null
}

const slice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(clientsApi.endpoints.getAllClients.matchFulfilled, (state, action) => {
                state.clients = action.payload
            })
    }
})

export default slice.reducer

export const selectClients = (state: RootState) => state.clients;//возможна ошибка и нужно в ещё 1 вложенность войти