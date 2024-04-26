import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllArtCraftItems from "../Pages/AllArtCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import ArtCraftList from "../Pages/ArtCraftList";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorElement from "../Components/ErrorElement";
import PrivateRutes from "./PrivateRutes";
import CraftItemDetails from "../Components/CraftItemDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/fakeData.json')
            },
            {
                path: '/craftItems/:id',
                element: <PrivateRutes><CraftItemDetails /></PrivateRutes>,
                loader: () => fetch('/fakeData.json')
            },

            {
                path: '/allArt&craftItems',
                element: <AllArtCraftItems />
            },
            {
                path: '/addCraftItem',
                element: <PrivateRutes><AddCraftItem /></PrivateRutes>
            },
            {
                path: '/art&CraftList',
                element: <PrivateRutes><ArtCraftList /></PrivateRutes>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
]);

export default router