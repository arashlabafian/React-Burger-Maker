import React from 'react';
import styles from './Spinner.css';

const spinner = (props) => (
  <div className={styles.Ellipsis}>
    <div style={props.dark ? {background: '#424242'} : {}}/>
    <div style={props.dark ? {background: '#424242'} : {}}/>
    <div style={props.dark ? {background: '#424242'} : {}}/>
    <div style={props.dark ? {background: '#424242'} : {}}/>
  </div>
);

export default spinner;