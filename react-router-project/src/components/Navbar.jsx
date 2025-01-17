import React from 'react'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        {/* <li>
           <Link to='/'>Home</Link>
        </li>
        <li>
           <Link to='/about'>About</Link> 
        </li>
        <li>
            <Link to='/dashboard'>Dashboard</Link>
        </li> */}
        <li>
           <NavLink to='/' className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
        </li>
        <li>
           <NavLink to='/about' className={({isActive})=>isActive?"active-link":""}>About</NavLink> 
        </li>
        <li>
            <NavLink to='/dashboard' className={({isActive})=>isActive?"active-link":""}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}
//React ke andar hum anchor tag use nhi krte because ye pura page ko refresh kr deta hai
export default Navbar
// with the help of navlink we can create a active class which can make styling easy
//navlink ke andar active class by default rehta hai