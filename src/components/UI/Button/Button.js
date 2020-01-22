import React from 'react';
import btnClasses from './Button.css';
import classnames from 'classnames'

// Instead of Success and Danger like Mr Schwartzmüller's project,
// The classes instead are gonna be Action and Caution

// My project's: buttonAction = Max's project: Success
// My project's: buttonCaution = Max's project: Caution
class button extends React.Component {
    state = {
        stdStyles: [btnClasses.button]
    };
    componentDidMount() {
        if (this.props.children && typeof this.props.children === 'string') {
            let styles = this.state.stdStyles.concat(
              btnClasses.buttonRounded,
              btnClasses.buttonGlow
            );
            this.setState({stdStyles: styles});
        } else {
            let boxStyle = this.state.stdStyles.concat(
              btnClasses.buttonLongShadow,
              btnClasses.buttonBox,
              btnClasses.button3d
            );
            this.setState({stdStyles: boxStyle})
        }

        if (this.props.isSmall) {
            let smallStyle = this.state.stdStyles.concat(
              btnClasses.buttonSmall,
              btnClasses.buttonRounded
            );
            this.setState({stdStyles: smallStyle});
        }
    }
    
    render() {
        const classes = classnames(this.state.stdStyles, btnClasses[this.props.btnType]);
        let btn = (
            <button
                disabled={this.props.disabled}
                style={{margin: '3px'}}
                className={classes} 
                onClick={this.props.clicked}>{this.props.children}</button>
        );

        if (this.props.hide) {
            btn = null;
        }
        return(btn);
    }
    
}

export default button;