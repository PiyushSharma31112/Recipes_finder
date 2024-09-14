import React from 'react'
import Header from '../components/common/Header'
import { Button } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div>
        <Header >
          <h1 className='header-title '>our recipes</h1>
          <NavLink to={'/Recipes'} className='button'>
              <button>
                Search Recipes
              </button>
          </NavLink>
        </Header>
    </div>
  )
}

export default Home
