import { createBrowserRouter } from 'react-router-dom';
import About from './Componets/Home/About';
import Home from './Componets/About/Home';
import Gallery from './Componets/Gallery/Gallery';


import Layout from "./Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'home',
                element: <Home />,
            },

            {
                path: 'about',
                element: <Home />,
            },
            {
                path: 'gallery',
                element: <Gallery />,
            },
            {

            },
        ],
    },
]);
