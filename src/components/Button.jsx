import React from 'react';
import styles from '../styles/button.module.scss'
import { FormattedMessage } from 'react-intl';

const Button = (props) => {
    return (
        <button className={styles.button}> <FormattedMessage id={props.text} /></button>
    )
};

export default Button;