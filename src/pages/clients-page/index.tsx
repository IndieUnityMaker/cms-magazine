import { Layout } from "../../components/layout/cms-layout";
import { Table } from "../../components/table";
import { ClientType } from "../../types/global-types";

export const ClientsPage = () => {
    const clients: ClientType[] = [
        {
            id: "id_1",
            fullName: "Иванов Иван Иванович",
            orders: [
                {
                    id: "order_1",
                    totalAmount: "1",
                    orderItems: [],
                },
            ],
            phone: "+79092327577",
            address: "Улица пушкина, дом колотушкина",
            comment: "Ну что сказать ну что сказать, желают люди желают знать.",
        },
        {
            id: "id_2",
            fullName: "Горбуов Горбан Горбатыч",
            orders: [
                {
                    id: "order_2",
                    totalAmount: "1",
                    orderItems: [],
                },
            ],
            phone: "+79092327577",
            address: "Улица пушкина, дом колотушкина",
            comment: "Ну что сказать ну что сказать, желают люди желают знать.",
        },
        {
            id: "id_2",
            fullName: "Дмитрий Иванович Крузенштерн",
            orders: [
                {
                    id: "order_2",
                    totalAmount: "1",
                    orderItems: [],
                },
            ],
            phone: "+79092327577",
            address: "Улица пушкина, дом колотушкина",
            comment: "Ну что сказать ну что сказать, желают люди желают знать.",
        },
    ];

    const clientColumns: { title: string; key: keyof ClientType }[] = [
        { title: "Полное имя", key: "fullName" },
        { title: "Номер телефона", key: "phone" },
        { title: "Адресс", key: "address" },
        { title: "Комментарий", key: "comment" },
        { title: "Заказы", key: "orders" },
    ];

    return (
        <Layout>
            <Table columns={clientColumns} data={clients} />
        </Layout>
    );
};
