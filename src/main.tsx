import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Paths } from "./paths.ts";
import { MainPage } from "./pages/main-page/index.tsx";
import { ThemeProvider } from "./providers/theme-provider/index.tsx";
import { LoginPage } from "./pages/login-page/index.tsx";
import { RegisterPage } from "./pages/register-page/index.tsx";
import { ProductsPage } from "./pages/products-page/index.tsx";
import { ClientsPage } from "./pages/clients-page/index.tsx";
import { OrdersPage } from "./pages/orders-page/index.tsx";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: Paths.login,
        element: <LoginPage />,
    },
    {
        path: Paths.register,
        element: <RegisterPage />,
    },
    {
        path: Paths.home,
        element: <MainPage />,
    },
    {
        path: Paths.products,
        element: <ProductsPage />,
    },
    {
        path: Paths.clients,
        element: <ClientsPage />,
    },
    {
        path: Paths.orders,
        element: <OrdersPage />,
    },
]);

root.render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
