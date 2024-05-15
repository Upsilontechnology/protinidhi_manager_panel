import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Registration from "./components/registration/Registration"
import './App.css'
import SuccessReg from "./components/registration/SuccessReg"
import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/dashboard/Dashboard"
import Overview from "./components/dashboard/overview/Overview"
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
          element: <div>order list</div>
        }
        
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
