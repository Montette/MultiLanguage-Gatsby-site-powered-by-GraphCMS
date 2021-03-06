import React from 'react';
import styles from '../styles/button.module.scss'
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import Link from '../components/Link';

const Button = (props) => {
    if(props.type === 'submit') {
        return (
            <button type="submit" className={props.style === 'white' ? cx(styles.button, styles.white) : styles.button }><FormattedMessage id={props.text} /></button>
        )
    } else if (props.type === 'button') {
        return (
            <button className={props.style === 'white' ? cx(styles.button, styles.white) : styles.button } onClick={props.handleClick}>{props.cms ? props.text : <FormattedMessage id={props.text} />}</button>
        )
    } else {
        return (
            <Link to={props.href} className={props.style === 'white' ? cx(styles.button, styles.white) : styles.button }>{props.cms ? props.text : <FormattedMessage id={props.text} />} </Link>
        )
    }

};

export default Button;