import React from 'react';
import styles from './BuildControl.css';
import btnClasses from '../../../UI/Button/Button.css';
import classnames from 'classnames';

const buildControl = (props) => {
	const btn = [
		btnClasses.button,
		btnClasses.buttonSmall,
		btnClasses.buttonBox,
		btnClasses.buttonSecondary,
		btnClasses.buttonLongShadow
	];

	const btnLess = [
		...btn
	];
	
	if (props.disabled){
		btnLess.push(btnClasses.disabled);
	}

	return(
		<div className={styles.BuildControl}>
			<div className={styles.Label}>{props.label}</div>
			<button 
				className={classnames(btnLess)}
				onClick={props.removed}
				disabled={props.disabled}><i className="fa fa-minus"></i></button>
			<button 
				className={classnames(btn)} 
				onClick={props.added}><i className="fa fa-plus"></i></button>
		</div>
	);
};

export default buildControl;