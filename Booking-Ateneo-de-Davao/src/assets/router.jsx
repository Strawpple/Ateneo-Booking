import {createBrowserRouter} from "react-router-dom";
import Login from '../views/Login.jsx';
import Home from '../views/Home.jsx';

const router = createBrowserRouter ([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/home',
        element: <Home/>
    },
])

export default router;