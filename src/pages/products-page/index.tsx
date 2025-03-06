import { Layout } from "../../components/layout/cms-layout";
import { ProductType } from "../../types/global-types";
import { Table } from "../../components/table";

export const ProductsPage = () => {
    const products: ProductType[] = [
        {
            id: "1",
            name: "Товар 1",
            category: "Категория A",
            price: 100,
            quantity: 50,
            status: "В наличии",
        },
        {
            id: "2",
            name: "Товар 2",
            category: "Категория B",
            price: 200,
            quantity: 0,
            status: "Нет",
        },
        {
            id: "1",
            name: "Товар 1",
            category: "Категория A",
            price: 100,
            quantity: 50,
            status: "В наличии",
        },
        {
            id: "2",
            name: "Товар 2",
            category: "Категория B",
            price: 200,
            quantity: 0,
            status: "Нет",
        },
        {
            id: "1",
            name: "Товар 1",
            category: "Категория A",
            price: 100,
            quantity: 50,
            status: "В наличии",
        },
        {
            id: "2",
            name: "Товар 2",
            category: "Категория B",
            price: 200,
            quantity: 0,
            status: "Нет",
        },
        {
            id: "1",
            name: "Товар 1",
            category: "Категория A",
            price: 100,
            quantity: 50,
            status: "В наличии",
        },
        {
            id: "2",
            name: "Товар 2",
            category: "Категория B",
            price: 200,
            quantity: 0,
            status: "Нет",
        },
        {
            id: "1",
            name: "Товар 1",
            category: "Категория A",
            price: 100,
            quantity: 50,
            status: "В наличии",
        },
        {
            id: "2",
            name: "Товар 2",
            category: "Категория B",
            price: 200,
            quantity: 0,
            status: "Нет",
        },
        {
            id: "1",
            name: "Товар 1",
            category: "Категория A",
            price: 100,
            quantity: 50,
            status: "В наличии",
        },
        {
            id: "2",
            name: "Товар 2",
            category: "Категория B",
            price: 200,
            quantity: 0,
            status: "Нет",
        },
        {
            id: "1",
            name: "Товар 1",
            category: "Категория A",
            price: 100,
            quantity: 50,
            status: "В наличии",
        },
        {
            id: "2",
            name: "Товар 2",
            category: "Категория B",
            price: 200,
            quantity: 0,
            status: "Нет",
        },
        {
            id: "1",
            name: "Товар 1",
            category: "Категория A",
            price: 100,
            quantity: 50,
            status: "В наличии",
        },
        {
            id: "2",
            name: "Товар 2",
            category: "Категория B",
            price: 200,
            quantity: 0,
            status: "Нет",
        },
        {
            id: "1",
            name: "Товар 1",
            category: "Категория A",
            price: 100,
            quantity: 50,
            status: "В наличии",
        },
        {
            id: "2",
            name: "Товар 2",
            category: "Категория B",
            price: 200,
            quantity: 0,
            status: "Нет",
        },
    ];

    const productColumns: { title: string; key: keyof ProductType }[] = [
        { title: "Имя товара", key: "name" },
        { title: "Категория", key: "category" },
        { title: "Цена", key: "price" },
        { title: "Количество", key: "quantity" },
        { title: "Статус", key: "status" },
    ];

    const productActions = (product: ProductType) => (
        <>
            <button
                onClick={() =>
                    console.log(`Редактировать товар с ID: ${product.id}`)
                }
            >
                Редактировать
            </button>
            <button
                onClick={() => console.log(`Удалить товар с ID: ${product.id}`)}
            >
                Удалить
            </button>
        </>
    );

    return (
        <Layout>
            <Table
                columns={productColumns}
                data={products}
                actions={productActions}
            />
        </Layout>
    );
};
