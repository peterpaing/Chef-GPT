import { useState } from "react"
import IngredientList from "./IngredientList"

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

            <IngredientList list={ingredient} removeItem={remove} />
        </>
    )
}