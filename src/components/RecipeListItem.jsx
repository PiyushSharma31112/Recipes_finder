import React from 'react'
import { Button, Card } from "semantic-ui-react"
import { Link } from "react-router-dom"

function RecipeListItem({recipe}) {
  return (

      <Card className='card'>
            <img src={recipe.image_url} alt="thumbnail" className='h-[170px]' />
            <Card.Content>
                <Card.Header content = {recipe.title} />
                <Card.Description>
                    <h4> {recipe.publisher} </h4>
                </Card.Description>

                <Card.Content>
                    <Button 
                        as={Link} 
                        to = {`/recipes/${recipe.recipe_id}`}  
                        content = "Details" 
                        color='blue' 
                        size='tiny' 
                        />
                        
                    <Button
                        href={recipe.source_url} 
                        target = "_blank" 
                        content = "Recipe url" 
                        color='green' 
                        size='tiny' 
                        />

                </Card.Content>
            </Card.Content>
      </Card>
  )
}

export default RecipeListItem
