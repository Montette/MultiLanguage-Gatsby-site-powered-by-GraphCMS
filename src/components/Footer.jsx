import React from 'react';
import styles from '../styles/footer.module.scss'
import Link from './Link';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__col}><Link className={styles.footer__logo} to="/">Komfrez Sp. z o. o.</Link></div>
            <div className={styles.footer__col}>
                <adress>
                    <p>ul. Traktorowa 67</p>
                    <p>Łódź, 98-450</p>
                    <p>Polska</p>
                    <p>Tel: 567 356 890</p>
                    <a href="mailto:office@komfrez.com">office@komfrez.com</a>
                </adress> 
            </div>
            <div className={styles.footer__col}>
            <nav>
                <ul className={styles.footer__nav}>
                    <li className={styles.footer__navLink}><Link activeClassName={styles.active} to="/about"><FormattedMessage id="nav.About us" /></Link></li>
                    <li className={styles.footer__navLink}><Link activeClassName={styles.active} to="/services"><FormattedMessage id="nav.Services" /></Link></li>
                    <li className={styles.footer__navLink}><Link activeClassName={styles.active} to="/portfolio"><FormattedMessage id="nav.Portfolio" /></Link></li>
                    <li className={styles.footer__navLink}><Link activeClassName={styles.active} to="/contact"><FormattedMessage id="nav.Contact" /></Link></li>
                </ul>
            </nav>
            </div>
        </footer>
    )
};

export default Footer;