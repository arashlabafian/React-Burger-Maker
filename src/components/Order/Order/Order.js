import React from 'react';

import styles from './Order.css';

const order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.data.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.data.ingredients[ingredientName]
    });
  }

  const output = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}>
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return(
    <div className={styles.Order}>
      <p>Ingredients: {output}</p>
      <p>Price: <strong>US$ {Number(props.data.price).toFixed(2)}</strong></p>
    </div>
  );
};

export default order;