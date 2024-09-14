import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter  } from "react-router-dom"
import Home from './pages/Home.jsx'
import Recipes from './pages/Recipes.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element = {<App />}>
      <Route path='' element= {<Home />} />
      <Route path='/Recipes' element= {<Recipes />} />
      <Route path='/recipes/:recipeId' element= {<RecipeDetails />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
