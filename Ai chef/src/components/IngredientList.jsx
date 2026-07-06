export default function IngredientList(props){

    const renderIngredient = props.list.map((item, index) => (
        <li
            key={`${item}-${index}`}
        >
            {item}
            <i className="fa-solid fa-circle-minus" onClick={() => props.removeItem(item)}></i>
        </li>
    ))

   return (
            <>
        <section className="ingredient-list">
        {props.list.length>0 ? <h2>Ingredients on hand:</h2> :null}
        <ul>{renderIngredient}</ul>
        </section>

        {props.list.length>2 ? <section className="generate-recipe">
            <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button type="button">Get a recipe</button>
        </section>:''}
        </>
    )
}