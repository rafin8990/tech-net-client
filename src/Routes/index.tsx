import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
export const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>
    },
    {
        path:'/home',
        element:<Home></Home>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])