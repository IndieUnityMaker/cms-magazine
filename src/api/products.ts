import { ProductType } from "../types/global-types";
import { api } from "./api";

export const productsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<ProductType[], void>({
            query: () => ({
                url: '/products',
                method: 'GET'
            })
        }),
        getProduct: builder.query<ProductType, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET'
            })
        }),
        editProduct: builder.mutation<string, ProductType>({
            query: (product) => ({
                url: `/products/edit/${product.id}`,
                method: 'PUT',
                body: product
            })
        }),
        removeProduct: builder.mutation<string, string>({
            query: (id) => ({
                url: `/products/remove/${id}`,
                method: 'POST',
                body: {
                    id
                }
            })
        }),
        createProduct: builder.mutation<ProductType, ProductType>({
            query: (product) => ({
                url: '/products/add',
                method: 'POST',
                body: product
            })
        })
    }),
})

export const { useCreateProductMutation, useEditProductMutation, useGetAllProductsQuery, useGetProductQuery, useRemoveProductMutation } = productsApi;

export const { endpoints: {
    createProduct,
    editProduct,
    getAllProducts,
    getProduct,
    removeProduct
} } = productsApi;