import React from 'react'
import { NavLink } from 'react-router-dom'
// import './App.css';

const Navbar = () => {
  return (
    <>
    <div className='nav-link'>
      <NavLink 
      style = {({isActive})=>{return {color: isActive ? 'red': 'black'}}} to="/">Home</NavLink>
      <NavLink style = {({isActive})=>{return {color: isActive ? 'red': 'black'}}} to="/Signup">Signup</NavLink>
      <NavLink style = {({isActive})=>{return {color: isActive ? 'red': 'black'}}} to="/Login">Login</NavLink>
      <NavLink style = {({isActive})=>{return {color: isActive ? 'red': 'black'}}} to="/Userdetail">Userdetail</NavLink>

    </div>
    </>
  )
}

export default Navbar