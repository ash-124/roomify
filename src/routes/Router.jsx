import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Main from '../layouts/Main'
import Login from '../pages/Authentication/Login'
import Logout from '../pages/Authentication/Logout'
import Home from '../pages/Home'
import AllRoom from '../pages/AllRoom'
import RoomDetails from '../pages/RoomDetails'
import PrivateRoute from './PrivateRoute'
import MyBookingsPage from '../pages/MyBookingPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Logout/>,
      },
      {
        path: 'rooms',
        element:<AllRoom/>
      },
      {
        path:'/room/:id',
        element:<PrivateRoute><RoomDetails/></PrivateRoute>
      },
      {
        path:'/my-bookings',
        element:<PrivateRoute><MyBookingsPage/></PrivateRoute>
      }
    ],
  },
])

export default router
