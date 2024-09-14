import axios from "axios"
import { API_URL } from "../constant/constant"


export const getRecipes = async (searchedQuerry) => {
    try {
        const response = await axios.get(`${API_URL}/search?q=${searchedQuerry}`)
        return response.data
    } catch (error) {
        console.log("You Got an error", error)
        return error.response
    }
}

export const getRecipe = async (searchedQuerry) => {
    try {
        const response  = await axios.get(`${API_URL}/get?rId=${searchedQuerry}`)
        
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("You Got an error", error)
       
    }
    
}
