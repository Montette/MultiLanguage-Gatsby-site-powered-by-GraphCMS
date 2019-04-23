import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from '../styles/cookies.module.scss'
import Button from './Button'
import Link from '../components/Link';


const Cookies = (props) => {
    console.log(props);
    return (
        <div className={styles.cookies}>
            <p className={styles.cookies__text}><FormattedMessage id="cookies.Cookies short" />
            <Link to="/cookies"><FormattedMessage id="cookies.Cookies more" /></Link>
            </p>
            <Button text="cookies.I accept" style="black" type="button" handleClick={props.closeCookies}/>
            {/* <button onClick={props.closeCookies}>Close</button> */}
        </div>
    )
};

export default Cookies