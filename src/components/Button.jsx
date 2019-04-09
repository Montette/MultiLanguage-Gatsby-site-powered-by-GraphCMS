import React from 'react';
import styles from '../styles/button.module.scss'
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';

const Button = (props) => {
    return (
        <button className={props.style === 'white' ? cx(styles.button, styles.white) : styles.button }> <FormattedMessage id={props.text} /></button>
    )
};

export default Button;