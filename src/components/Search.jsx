import React, {useState} from 'react'
import {Grid, Form, Input} from "semantic-ui-react"

function Search({ setSearchedQuerry }) {

    const [value, setValue] = useState('')

    const onFormSubmit = () => {
        setSearchedQuerry(value)
    }

  return (
   <Grid columns={2} textAlign='center' className='search-box'>
        <Grid.Column>
            <h2 className='search-heading'>Search Recipes with <span className='text-[#2185d0]'> our Recipes </span></h2>
            <h4>Input Recipes seperated by comma </h4>
            <Form onSubmit={onFormSubmit}>
                <Input
                    placeholder = "Tomato,  Potato, pizza,"
                    action={{icon: "search", color: 'blue'}}
                    onChange={(e) => setValue(e.target.value)}
                    value = {value}
                />
            </Form>
        
        
        </Grid.Column>
   </Grid>
  )
}

export default Search
