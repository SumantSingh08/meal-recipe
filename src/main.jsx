
import { createRoot } from 'react-dom/client'
import Meals from './conponents/Meals.jsx'
import App from './App.jsx'
import MealInfo from './conponents/MealInfo.jsx'
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom'
import MealContext from './Context/mealContext.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path='' element={<Meals/>} />
    <Route path='recipe/:id' element={<MealInfo/>} />
  </Route>
)) 


createRoot(document.getElementById('root')).render(
  <MealContext>
  <RouterProvider router={router}/>
  </MealContext>
)
