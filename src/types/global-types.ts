
export type ProductType = {
    id: string,
    name: string,
    description?: string,
    category: string,
    price: number,
    quantity: number,
    image?: string,
    status: string,
}

export type ClientType = {
    id: string,
    fullName: string,
    phone?: string,
    address?: string,
    comment?: string,
    orders: OrderType[]
}

export type OrderType = {
    id: string,
    clientId: string,
    orderItems: ProductType[],
    totalAmount: string,
    createdAt: Date,
}
