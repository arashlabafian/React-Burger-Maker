import React from 'react';
import styles from './Menu.css';
import menuIcon from '../../../assets/images/menu.svg';

const menu = (props) => (
	<div className={styles.Hamburger} onClick={props.openSideDrawer}>
		<img className={styles.img} src={menuIcon} alt="Hamburger icon"/>
	</div>
);

export default menu;