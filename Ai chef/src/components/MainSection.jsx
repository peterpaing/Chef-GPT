import { useState } from "react"
import IngredientList from "./IngredientList"
import getAiResponse from '../Ai'


export default function Main() {
    const [ingredient, setIngredient] = useState([])

    function addList(formData) {
        const name = formData.get("ingredients")

        if (name.trim() && !ingredient.includes(name)) {
            setIngredient(prev => [name,...prev])
        }
    }

    function remove(itemName) {
        setIngredient(prev =>
            prev.filter(item => item !== itemName)
        )
    }


     const [meal , setMeal] = useState('')
     const [loading, setLoading] = useState(false)

    async function generate() {
    setLoading(true)

    try {
        const response = await getAiResponse(ingredient.join(", "));
        setMeal(response)
    } catch (err) {
        console.error(err)
        setMeal("Something went wrong. Please try again.");
    } finally {
        setLoading(false)
    }
}

  return (
        <>
            <section className="add-ingredient">
                <form action={addList}>
                    <input
                        type="text"
                        name="ingredients"
                        placeholder="e.g. potato"
                        required
                    />
                    <button type="submit">
                        + Add ingredient
                    </button>
                </form>
            </section>

            <IngredientList 
            list={ingredient}
             removeItem={remove} 
             getRecipe={generate}
              meals={meal} 
              loading={loading}/>
        </>
    )
}