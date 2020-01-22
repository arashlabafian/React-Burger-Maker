import React from 'react';
import classnames from 'classnames';

import styles from './Input.css';

const input = (props) => {
  let inputElement = null;
  const inputStyles = [styles.InputElement];

  if (props.invalid && props.shouldValidate) {
    inputStyles.push(styles.Invalid);
  }

  switch (props.elementType){
    case('text'):
      inputElement = <textarea
        className={classnames(inputStyles)}
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed}/>;
      break;
    case('input'):
      inputElement = <input
				className={classnames(inputStyles)}
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed}/>;
      break;
    case('select'):
      inputElement = (
        <select
					className={classnames(inputStyles)}
					value={props.value}
					onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option value={option.value} key={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input
				className={classnames(inputStyles)}
				{...props.elementConfig}
				onChange={props.changed}/>
  }

  return(
    <div className={styles.Input}>
      {inputElement}
    </div>
  );
};

export default input;