import React, { useEffect, useState } from 'react';

export default function Main() {

    const [ingredients, setIngredients] = useState(["Lemons", "Sugar", "Water"]);
    const [value, setValue] = useState("");

    const addIngredient = (value) => {
        const newIngredients = [...ingredients, value];
        setIngredients(newIngredients);
    }

    return (
        <div>
            <h1>Add your ingredients</h1>
            <input type="text" placeholder="Ingredient" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => addIngredient(value)}>Add</button>
            <h1>Your ingredients</h1>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <button>Generate Recipes</button>
        </div>
    )
}