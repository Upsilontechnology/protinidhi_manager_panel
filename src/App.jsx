import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Registration from "./components/registration/Registration"
import './App.css'
import SuccessReg from "./components/registration/SuccessReg"
import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/dashboard/Dashboard"
import Overview from "./components/dashboard/overview/Overview"
import Orderlist from "./components/dashboard/orderlist/Orderlist"
import PendingOrder from "./components/dashboard/orderlist/pandingOrders/PendingOrder"
import ConfirmedOrder from "./components/dashboard/orderlist/confirmedOrder/ConfirmedOrder"
import DeliveredOrder from "./components/dashboard/orderlist/deliveredOrder/DeliveredOrder"
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Registration/>
    },
    {
      path: '/successReg',
      element: <SuccessReg/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>,
      children: [
        {index: true, element: <Overview/> },
        {
          path:'directOrderList',
          element: <Orderlist/>,
          children: [
            {index: true, element: <PendingOrder/> },
            {
              path: 'confirmed',
              element: <ConfirmedOrder/>
            },
            {
              path: 'delivered',
              element: <DeliveredOrder/>
            },
          ]
        },
        
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
