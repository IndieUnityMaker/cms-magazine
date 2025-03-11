import { Layout } from "../../components/layout/cms-layout";
import { ProductType } from "../../types/global-types";
import { Table } from "../../components/table";

import style from "./index.module.css";
import { ChangeEvent, useState } from "react";
import { useTheme } from "../../providers/theme-provider/theme-context";
import { SelectElement } from "../../components/ui-element/select";

const productsAll: ProductType[] = [
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
export const ProductsPage = () => {
    const [products, setProducts] = useState(productsAll);
    const [searchWord, setSearchWord] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("все статусы");
    const [selectedCategory, setSelectedCategory] = useState("все категории");
    const { isDark } = useTheme();

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

    const filterProducts = (
        arr: ProductType[],
        searchWord: string,
        status: string,
        category: string
    ) => {
        return arr.filter((item) => {
            const searchResult = item.name
                .toLowerCase()
                .includes(searchWord.toLowerCase());
            const statusResult =
                status.toLowerCase() === "все статусы" ||
                item.status === status;
            const categoryResult =
                category.toLowerCase() === "все категории" ||
                item.category.toLowerCase() === category.toLowerCase();

            return searchResult && statusResult && categoryResult;
        });
    };

    const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
        const newSearchWord = evt.target.value;
        setSearchWord(newSearchWord);
        setProducts(
            filterProducts(
                productsAll,
                newSearchWord,
                selectedStatus,
                selectedCategory
            )
        );
    };
    const handleStatusChange = (status: string) => {
        setSelectedStatus(status);
        setProducts(
            filterProducts(productsAll, searchWord, status, selectedCategory)
        );
    };
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setProducts(
            filterProducts(productsAll, searchWord, selectedStatus, category)
        );
    };
    return (
        <Layout>
            <div className={style.inputContainer}>
                <input
                    onChange={handleSearch}
                    className={`${style.inputSearch} ${
                        isDark ? style.dark : style.light
                    }`}
                    type="text"
                    placeholder="найти"
                />
                <SelectElement
                    mainOption="Все категории"
                    options={["Категория A", "Категория B", "Категория С"]}
                    onChange={handleCategoryChange}
                />
                <SelectElement
                    mainOption="Все статусы"
                    options={["В наличии", "Нет"]}
                    onChange={handleStatusChange}
                />
            </div>

            <Table
                columns={productColumns}
                data={products}
                actions={productActions}
            />
        </Layout>
    );
};
