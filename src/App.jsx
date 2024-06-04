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
import RiderList from "./components/dashboard/riderlist/RiderList.jsx"
import CreateOrder from "./components/dashboard/createOrder/CreateOrder.jsx"
import Message from "./components/dashboard/message/Message.jsx"
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
        {
          path: "riderlist",
          element: <RiderList />
        },
        {
          path: "message",
          element: <Message />
        },
        {
          path: "clientlist",
          element: <RiderList />
        },
        {
          path: "servicelist",
          element: <RiderList />
        },
        {
          path: "supportticket",
          element: <RiderList />
        },
        {
          path: "createorder",
          element: <CreateOrder />
        },
        {
          path: "orderlist",
          element: <RiderList />
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
