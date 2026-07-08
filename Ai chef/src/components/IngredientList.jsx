import { marked } from "marked"

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
            {props.list.length > 0 && <h2>On-Hand Ingredients:</h2>}

            <ul>{renderIngredient}</ul>

            {props.list.length > 0 && props.list.length < 3 && (
                <div className="warning">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p>Please add at least 3 ingredients</p>
                </div>
            )}
        </section>

        {props.list.length > 2 && (
            <section className="generate-recipe">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>

                <button
                    type="button"
                    onClick={props.getRecipe}
                    disabled={props.loading}
                >
                    {props.loading ? "Generating..." : "Get a recipe"}
                </button>
            </section>
        )}

        <section className="cooking">
            {props.loading ? (
                <p className="loading-text">🍳 Creating your perfect recipe...</p>
            ) : (
                props.meals && (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: marked(props.meals)
                        }}
                    />
                )
            )}
        </section>
    </>
)
}

