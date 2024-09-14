import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Grid, Header, Segment, Image } from 'semantic-ui-react'
import { getRecipe } from "../services/api" 
import { Link } from 'react-router-dom'

function RecipeDetails() {

    const [recipe, setRecipe] = useState({})

    const { recipeId } = useParams()

    useEffect(() => {
        
        const getData  = async () => {
            let result = await getRecipe(recipeId)
            if (result && result.recipe) {
                setRecipe(result.recipe)
            }
        }

        getData()
    }, [])

  return (
   Object.keys(recipe).length > 0 ?
   <Grid container stackable columns={2} className='detailsPageContent'>
        <Grid.Column>
            <Button as={Link} to = {'/recipes'} content = 'Back to recipe List' color='yellow' style = {{marginBottom: 40}} />
            <Image src = {recipe.image_url} />
        </Grid.Column>

        <Grid.Column>
            <Header size='medium'>
                {recipe.title}
            </Header>

            <p>Provided By: {recipe.publisher}</p>
            <Button a={'a'} href={recipe.publisher_url} target = "_blank" content = 'Publisher Webpage' color='blue'/>
            <Button a={'a'} href={recipe.source_url} target = "_blank" content = 'Recipe URL' color='green'/>
            
            <Header size= "large" content= 'Ingrediant' />
            <Segment.Group>
                {
                    recipe && recipe.ingredients.map(data => (
                        <Segment>
                            <h5> {data} </h5>
                        </Segment>
                    ))
                }
            </Segment.Group>

        </Grid.Column>
   </Grid> : null
  )
}

export default RecipeDetails
