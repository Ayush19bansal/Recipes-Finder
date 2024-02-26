import { useState } from 'react'
import './App.css'
import Recepie from './Component/Recepie'
import Home from './Component/Home'
import RecipeList from './Component/RecipeList'
import { Route,RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  const route = createBrowserRouter([
    {path: "/",
     element: <Home />
  },
  {
    path: '/foods',
    element: <RecipeList />
  },
  {
    path: "/recipes/:recipeId",
    element: <Recepie />
  }
  ])

  return (
    <>
     <RouterProvider router={route} />
    </>
  )
}

export default App