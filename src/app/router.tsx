import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from '../pages/details';
import { HomePage } from '../pages/home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/details/:id",
        element: <DetailPage />
    }
])