import React from 'react';
import styles from '../styles/footer.module.scss'
import Link from './Link';
import { FormattedMessage } from 'react-intl';
import { StaticQuery, graphql } from 'gatsby';

const Footer = ({ data, lang }) => {
     const currentCountryData = data.filter(el => el.language === lang)[0];
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__col}><Link className={styles.footer__logo} to="/">Komfrez Sp. z o. o.</Link></div>
            <div className={styles.footer__col}>
                <adress>
                    <p>{currentCountryData.street}</p>
                    <p>{currentCountryData.city}</p>
                    <p>{currentCountryData.country}</p>
                    <p>{currentCountryData.phone}</p>
                    <a href={`mailto:${currentCountryData.mail}`}>{currentCountryData.mail}</a>
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
    
    );
  };
  
export default Footer;