import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Registration from "./components/registration/Registration"
import './App.css'
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Registration/>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
