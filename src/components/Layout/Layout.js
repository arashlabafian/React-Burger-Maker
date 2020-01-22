import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.css';

class layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerOpenedHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer }
		});
	};

	render() {
		return(
			<Fragment>
				<Toolbar
					isAuth={this.props.isAuthenticated}
					openSideDrawer={this.sideDrawerOpenedHandler} />
				<SideDrawer
					isAuth={this.props.isAuthenticated}
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler} />
				<main className={styles.MainContent}>{this.props.children}</main>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	}
};

export default connect(mapStateToProps)(layout);