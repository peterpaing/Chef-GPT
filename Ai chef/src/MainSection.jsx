import { useState } from "react"
import IngredientList from "./components/IngredientList"

export default function Main() {
    const [ingredient, setIngredient] = useState([])

    function addList(formData) {
        const name = formData.get("ingredients")

        if (name.trim()) {
            setIngredient(prev => [...prev, name])
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