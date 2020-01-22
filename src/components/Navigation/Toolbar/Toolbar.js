import React from 'react';
import Menu from '../Menu/Menu';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import styles from './Toolbar.css';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <Menu openSideDrawer={props.openSideDrawer} />
        <Logo height="100%" />
        <nav className={styles.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;