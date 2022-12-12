import { lazy } from "react";
import { PUBLIC_ROUTES } from "./paths";

export const publicRoutes = [
    {
        path: PUBLIC_ROUTES.HOME,
        Component: lazy(() => import("@pages/Home"))
    },
    {
        path: PUBLIC_ROUTES.ROOMS,
        Component: lazy(() => import("@pages/Room"))
    }
]