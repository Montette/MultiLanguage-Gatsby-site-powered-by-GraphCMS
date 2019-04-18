import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import styles from '../styles/sectionHeading.module.scss'
import cx from 'classnames';
import Typed from 'react-typed';
import typedText from '../utils/typedTexts.js'



const SectionHeading = (props) => {

    return (
       <header className={styles.heading}>
           <p className={styles.heading__subtitle}>{props.cms ? props.subtitle : <FormattedMessage id={props.subtitle}/>}</p>
           <h3 className={styles.heading__title}>
           {props.cms ? props.title : <FormattedMessage id={props.title}/>}
           {props.locale && props.section && <Typed 
                strings={typedText(props.locale, props.section)}
                    typeSpeed={100}
                    backSpeed={50} 
                    backDelay={1500}
                    loop >
                   <span></span>
                </Typed>
           }
           
           </h3>
       </header>
    )
};

export default SectionHeading;
