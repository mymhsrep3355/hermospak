import { useState } from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing/Landing'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
])
function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
