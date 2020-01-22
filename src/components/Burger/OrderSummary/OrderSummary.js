import React, { Component, Fragment } from 'react';
import Button from '../../UI/Button/Button';
import styles from './OrderSummary.css';

class OrderSummary extends Component {
  render() {
		const ingredientSummary = Object.keys(this.props.ingredients)
			.map(ingKey => {
				return (
					<li key={ingKey}>
						<span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
					</li>);
			});

		return (
			<Fragment>
				<h3>Your order</h3>
				<p>A burger with the following ingredients:</p>
				<ul className={styles.IngredientsList}>{ingredientSummary}</ul>
				<div className={styles.Card}>
					<p>Total: US$ {this.props.price.toFixed(2)}</p>
				</div>
				<p>Continue with checkout?</p>
				<Button
					btnType="buttonCaution"
					clicked={this.props.canceled}><i className="fa fa-repeat"/></Button>
				<Button
					btnType="buttonAction"
					clicked={this.props.continue}><i className="fa fa-check"/></Button>
			</Fragment>
		);
	}
}

export default OrderSummary;