import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import nextStyles from '../styles/Home.module.css'
import styles from "../styles/Ingredient.module.css"


export default function Ingredients() {

    const [ingredients, setIngredients] = useState(["Lemons", "Sugar", "Water"]);
    const [value, setValue] = useState("");

    const addIngredient = (value) => {
        const newIngredients = [...ingredients, value];
        setIngredients(newIngredients);
    }

    return (
        <div className={styles.ingredient}>
            <h1>Add your ingredients</h1>
            <input type="text" placeholder="Ingredient" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => addIngredient(value)}>Add</button>
            <h1>Your ingredients</h1>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <div className={nextStyles.card}>
                <Link href="/recipes">
                    <a>Generate Recipes</a>
                </Link>
            </div>
        </div>
    )
}