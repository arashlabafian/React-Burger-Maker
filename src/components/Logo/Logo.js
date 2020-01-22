import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.css';
import burgerLogo from '../../assets/images/logo.png';

const logo = (props) => (
	<div className={styles.Logo} style={{height: props.height}}>
		<Link to="/">
		<img src={burgerLogo} alt="My Burger Logo"/>
		</Link>
	</div>
);

export default logo;