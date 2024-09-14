import React from 'react'
import { Container, Header, Grid } from "semantic-ui-react"
import RecipeListItem from './RecipeListItem'

function RecipeList({recipes, searchedQuerry}) {
  return (
      <Container>
        <Header size='huge' content = {`RECIPE LIST FOR ${searchedQuerry}`} textAlign='center' />

        <Grid columns={4} doubling>
            {
              recipes && recipes.map((recipe) => 
                  <Grid.Column>
                      <RecipeListItem recipe = {recipe} />
                  </Grid.Column>
              )
            }
        </Grid>
      </Container>
  )
}

export default RecipeList
