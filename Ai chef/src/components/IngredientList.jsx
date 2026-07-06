export default function IngredientList(props){

    const renderIngredient = props.list.map((item, index) => (
        <li
            key={`${item}-${index}`}
            onClick={() => props.removeItem(item)}
        >
            {item}
            <i className="fa-solid fa-circle-minus"></i>
        </li>
    ))

   return (
        <section className="ingredient-list">
        {props.list.length>0 ? <h2>Ingredients on hand:</h2> :null}
        <ul>{renderIngredient}</ul>
        </section>
    )
}