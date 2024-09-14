import React from 'react'
import { Menu } from "semantic-ui-react"
import { logo } from "../../constant/constant"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Menu borderless fixed='top' >
        <Menu.Item>
            <img src={logo} alt="logo" style={{width: 125, height: 70}}/>
        </Menu.Item>
        <div className='flex justify-center gap-10 items-center'>
          <NavLink to={''} className={({isActive}) => `${isActive ? "text-red-500" : "text-gray-400"} nav-links`}>
            Home
          </NavLink>
          <NavLink to={'/Recipes'} className={({isActive}) => `${isActive ? "text-red-500" : "text-gray-400"}  nav-links`}>
            Recipes
          </NavLink>
        </div>
      </Menu>
    </div>
  )
}

export default Navbar
