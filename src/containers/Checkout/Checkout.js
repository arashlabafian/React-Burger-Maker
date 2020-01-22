import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomerData from './CustomerData/CustomerData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/customer-data');
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
    	const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
    	summary = (
    		<div style={{marginTop: '4rem'}}>
					{purchasedRedirect}
					<CheckoutSummary
						ingredients={this.props.ings}
						checkoutCancelled={this.checkoutCancelledHandler}
						checkoutContinued={this.checkoutContinuedHandler}/>
					<Route
						path={this.props.match.path + '/customer-data'}
						component={CustomerData} />
				</div>
			);
		}
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
		purchased: state.order.purchased,
		price: state.burgerBuilder.totalPrice
  }
};

export default connect(mapStateToProps)(Checkout);