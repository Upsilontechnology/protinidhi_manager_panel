import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Registration from "./components/registration/Registration"
import './App.css'
import SuccessReg from "./components/registration/SuccessReg"
import Login from "./components/login/Login"
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
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
