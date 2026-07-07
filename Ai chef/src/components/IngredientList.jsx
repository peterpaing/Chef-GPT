export default function IngredientList(props){

    const renderIngredient = props.list.map((item, index) => (
        <li
            key={`${item}-${index}`}
        >
            {item}
            <i className="fa-solid fa-xmark" onClick={() => props.removeItem(item)}></i>
        </li>
    ))

   return (
            <>
        <section className="ingredient-list">
        {props.list.length>0 ?<h2>Ingredients on hand:</h2>:null}
        <ul>{renderIngredient}</ul>
        {props.list.length>0 && props.list.length<3 ?<div className="warning"><i class="fa-solid fa-circle-exclamation"></i><p>Please add at least 3 ingredients</p> </div>: ''}
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

