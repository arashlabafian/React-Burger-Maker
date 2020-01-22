import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';

const sideDrawer = (props) => {
	let cx = classNames.bind(styles);
	let attachedClasses = cx({
		SideDrawer: true,
		Open: props.open,
		Close: !props.open
	});

  return (
  	<Fragment>
			<Backdrop show={props.open} leaveBackdrop={props.closed} />
			<div className={attachedClasses} style={{marginBottom: '16px'}} onClick={props.closed}>
				<Logo height="11%" />
				<nav>
					<NavigationItems isAuthenticated={props.isAuth} />
				</nav>
			</div>
		</Fragment>
  );
};

export default sideDrawer;