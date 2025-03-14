import { ClientType } from "../types/global-types";
import { api } from "./api";

export const clientsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllClients: builder.query<ClientType[], void>({
            query: () => ({
                url: '/clients',
                method: 'GET'
            })
        }),
        getClient: builder.query<ClientType, string>({
            query: (id) => ({
                url: `/clients/${id}`,
                method: 'GET'
            })
        }),
        editClient: builder.mutation<string, ClientType>({
            query: (client) => ({
                url: `/clients/edit/${client.id}`,
                method: 'PUT',
                body: client
            })
        }),
        removeClient: builder.mutation<string, string>({
            query: (id) => ({
                url: `/clients/remove/${id}`,
                method: 'POST',
                body: {
                    id
                }
            })
        }),
        createClient: builder.mutation<ClientType, ClientType>({
            query: (client) => ({
                url: '/clients/add',
                method: 'POST',
                body: client
            })
        })
    })
})

export const { useCreateClientMutation, useEditClientMutation, useGetAllClientsQuery, useGetClientQuery, useRemoveClientMutation } = clientsApi;

export const { endpoints: {
    createClient,
    editClient,
    getAllClients,
    getClient,
    removeClient
} } = clientsApi;