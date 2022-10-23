import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Blog from "../components/Blog";
import Main from "../Layout/Main";
import News from "../components/News";
import Destinaton from "../components/Destinaton";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Registation from "../components/Registation";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('http://localhost:5000/catagories')
            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/catagories')
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/news',
                element: <News />
            },
            {
                path: '/destination',
                element: <Destinaton />
            },
            {
                path: '/destination',
                element: <Destinaton />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Registation />
            }
        ]
    }
])