import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.module.css';
import { router } from './router';


const App = (props) => {
    return (

        <RouterProvider router={router} />
    );
};

export default App;





