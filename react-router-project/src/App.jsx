import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Course from './components/Course';
import Report from './components/Report';
import MockText from './components/MockText';
import NotFound from './components/NotFound';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
      
      // Home page ka path kya hai and uss wale path mei konsa element hai...
    },{
      path:"/about",
      element:<div>
      <Navbar/>
      <About/>
    </div>
    },{
      path:"/dashboard",
      element:<div>
      <Navbar/>
      <Dashboard/>
    </div>,
    children:[ // NESTED ROUTE
      {
        path:'course',
        element:<Course/>
      },{
        path:'reports',
        element:<Report/>
      },{
        path:'mock-tests',
        element:<MockText/>
      }
    ]

    },{
      path:"/student/:id",
      element:<div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path:'*', // * matlab -->kch bhi
      element:<NotFound/>
    }

  ]
);
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar/> */}
      <RouterProvider router={router}/>   {/*//application ko route ka khabar de rha hai */}
    </div>
  )
}

export default App
