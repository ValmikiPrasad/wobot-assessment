
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Recipes from './components/Recipes.jsx'
import SingleRecipe from './components/SingleRecipe.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Recipes/>
      },
      {
        path: "recipe/:id",
        element: <SingleRecipe/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
