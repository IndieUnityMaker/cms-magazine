import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Paths } from "./paths.ts";
import { MainPage } from "./pages/main-page/index.tsx";
import { ThemeProvider } from "./providers/theme-provider/index.tsx";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <MainPage />,
    },
]);

root.render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
