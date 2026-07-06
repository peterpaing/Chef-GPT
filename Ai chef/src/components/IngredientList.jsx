export default function IngredientList(props){

    const render = props.list.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
    ))

    return (
        <section className="ingredient-list">
        {props.list.length>0 ? <h2>Ingredients on hand:</h2> :null}
        <ul>{render}</ul>
        </section>
    )
}