import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingrKey => { // for each of them
            return [...Array(props.ingredients[ingrKey])].map((_, index) => {
                    return <BurgerIngredient key={ingrKey + index} type={ingrKey} />;
                });
        }).reduce((prevArr, cur) => {
            return prevArr.concat(cur);
        }, []); // transform an array into something else
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients.</p>
    }
    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;