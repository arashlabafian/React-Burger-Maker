import React, { Component, Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.css';

class Modal extends Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}

  render() {
    return (
			<Fragment>
				<Backdrop show={this.props.show} leaveBackdrop={this.props.closeModal} />
				<div
					className={styles.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}>
					{this.props.children}
				</div>
			</Fragment>
		);
  }
}

export default Modal;