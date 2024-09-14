import React, { useEffect, useState } from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
import { getRecipes } from "../services/api"

function Recipes() {

    const [searchedQuerry, setSearchedQuerry] = useState('Cake')
    const [recipes, setRecipes] = useState([])

    const getSearchresult = async () => {
        const result = await getRecipes(searchedQuerry)
        
        if (result && result.recipes) {
            setRecipes(result.recipes)
        }
    }

    useEffect(() => {
        getSearchresult()
    }, [searchedQuerry])

  return (
    <>
        <Search setSearchedQuerry = {setSearchedQuerry} />
        <RecipeList recipes = {recipes} searchedQuerry = {searchedQuerry} />
    </>
  )
}

export default Recipes
