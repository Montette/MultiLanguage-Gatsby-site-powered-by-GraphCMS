import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from '../styles/sectionHeading.module.scss'
import cx from 'classnames';

const SectionHeading = (props) => {
    return (
       <header className={styles.heading}>
           <p className={styles.heading__subtitle}><FormattedMessage id={props.subtitle}/></p>
           <h3 className={styles.heading__title}><FormattedMessage id={props.title}/></h3>
       </header>
    )
};

export default SectionHeading;