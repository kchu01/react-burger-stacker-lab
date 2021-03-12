export default function Ingredient(props) {
    return (
        <div>
            <button onClick={props.handleIncredientClick} >{props.name}</button>

        </div>
    )
}