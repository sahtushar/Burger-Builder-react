import React from 'react';
import classes from './Burger.css'

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = (props) => {

    let ingredients = props.ingredients;
    console.log("ingredients", ingredients);
    let count=0;
    let transformedIngredients = Object.keys(ingredients).map((ingredient_name) => {
        return [...Array(ingredients[ingredient_name])].map((_, i) => {
            ++count;
            return (<BurgerIngredient key={i+ingredient_name} type={ingredient_name}/>)
        });
    });
    console.log("count",count);
    if(count===0)
    {
        transformedIngredients=(<p>Please add Ingredients</p>)
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};
export default burger;