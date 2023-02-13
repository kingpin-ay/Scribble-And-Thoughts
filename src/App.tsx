import { createBrowserRouter , RouterProvider , createRoutesFromElements , Route} from 'react-router-dom'
import './App.css'

import ErrorPage from "./routes/error-page";
import About from './routes/About';
import Home from './routes/Home';
import Login from './routes/Login';
import RootLayout from "./routes/RootLayout"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About />}/>
      <Route path='login' element={<Login/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Route>
  ) 
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
