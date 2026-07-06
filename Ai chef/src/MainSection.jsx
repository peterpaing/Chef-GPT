export default function Main(){
    return (
        <section className="ingredient-list">
            <form>
                <input type="text" name="ingredients" placeholder="e.g. oregano" required/>
                <button type="submit">+ Add ingredient</button>
            </form>
        </section>
    )
}