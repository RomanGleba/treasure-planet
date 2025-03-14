import { createBrowserRouter } from 'react-router-dom';
import Home from './Componets/Home/Home';
import About from './Componets/About/About';
import Contacts from './Componets/Contacts/Contacts';
import Shop from './Componets/Shop/Shop';

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
                element: <About />,
            },
            {
                path: 'contacts',
                element: <Contacts />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
        ],
    },
]);
