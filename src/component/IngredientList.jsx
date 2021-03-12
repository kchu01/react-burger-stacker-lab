import { useState } from "react";
import Ingredient from "./Ingredient";


export default function IngredientList(props) {
    const ingredientObj = [
        { name: 'Kaiser Bun', color: 'saddlebrown' },
        { name: 'Sesame Bun', color: 'sandybrown' },
        { name: 'Gluten Free Bun', color: 'peru' },
        { name: 'Lettuce Wrap', color: 'olivedrab' },
        { name: 'Beef Patty', color: '#3F250B' },
        { name: 'Soy Patty', color: '#3F250B' },
        { name: 'Black Bean Patty', color: '#3F250B' },
        { name: 'Chicken Patty', color: 'burlywood' },
        { name: 'Lettuce', color: 'lawngreen' },
        { name: 'Tomato', color: 'tomato' },
        { name: 'Bacon', color: 'maroon' },
        { name: 'Onion', color: 'lightyellow' }
    ]

    const ingredients = ingredientObj.map((ingredientObj, idx) => {
        return (
            <Ingredient
                key={`${idx}`}
                name={ingredientObj.name}
                color={ingredientObj.color}
                handleIngredientClick={props.handleIngredientClick}
            />
        )
    })



    return (
        <div>
            <h1>Ingredient List</h1>
            {ingredients}
        </div>
    )
}