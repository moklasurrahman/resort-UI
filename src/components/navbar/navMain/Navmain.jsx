import React from 'react'
import navLogo from "../../../assets/logo.png"
import { NavLink } from 'react-router-dom';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import ClearIcon from '@mui/icons-material/Clear';


import './navmain.scss'
import { useState } from 'react';

const Navmain = () => {

  const [navitemshow, setnavitem] = useState(false)

  return (
    <div className='navmain'>
        <div className="navItem">
           
            <img className='logo' src={navLogo} alt="" />

            <div className={`navLink ${navitemshow ? ' showLink' : ''}`}>
        
            <NavLink to='/' className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Home
            </NavLink>
            
            <NavLink to='/home' className={({ isActive }) => (isActive ? " link-active" : "link")}>
              About us
            </NavLink>
            
            <NavLink to='/out' className={({ isActive }) => (isActive ? " link-active" : "link")}>
              packages
            </NavLink>
            
            <NavLink to='/hjhj' className={({ isActive }) => (isActive ? " link-active" : "link")}>
              eco park
            </NavLink>

            <NavLink to='/jkbjg' className={({ isActive }) => (isActive ? " link-active" : "link")}>
              cottage
            </NavLink>

            <NavLink to='/gnbgn' className={({ isActive }) => (isActive ? " link-active" : "link")}>
              our resorts
            </NavLink>

            <NavLink to='/fbnk' className={({ isActive }) => (isActive ? " link-active" : "link")}>
              events
            </NavLink>

            <NavLink to='/fbgfn' className={({ isActive }) => (isActive ? " link-active" : "link")}>
              contact
            </NavLink>
            </div>

            <div className="mobile" onClick={() => setnavitem((prev) => !prev)}>
                {navitemshow ? <ClearIcon style={{color:'red'}} className='togglicon'/> : <LineStyleIcon className='togglicon'/>}
            </div>

            
        </div>
    </div>
  )
}

export default Navmain