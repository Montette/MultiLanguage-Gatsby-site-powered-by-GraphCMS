import React from 'react';
import styles from '../styles/footer.module.scss'
import Link from './Link';
import { FormattedMessage } from 'react-intl';
import {useState} from 'react';
import Cookies from './Cookies'


const Footer = ({ data, lang }) => {
     const currentCountryData = data.filter(el => el.language === lang)[0];
     const [isCookiesOpen, closeCookiesInfo] = useState(true);
    return (
        <footer className={styles.footer}>
        <div className={styles.footer__container}>
            <div className={styles.footer__col}><Link className={styles.footer__logo} to="/">Komfrez</Link></div>
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
                    <li className={styles.footer__navLink}><Link activeClassName={styles.active} to="/o-nas"><FormattedMessage id="nav.About us" /></Link></li>
                    <li className={styles.footer__navLink}><Link activeClassName={styles.active} to="/uslugi"><FormattedMessage id="nav.Services" /></Link></li>
                    <li className={styles.footer__navLink}><Link activeClassName={styles.active} to="/portfolio"><FormattedMessage id="nav.Portfolio" /></Link></li>
                    <li className={styles.footer__navLink}><Link activeClassName={styles.active} to="/kontakt"><FormattedMessage id="nav.Contact" /></Link></li>
                    <li className={styles.footer__navLink}><Link activeClassName={styles.active} to="/privacy-policy"><FormattedMessage id="nav.Privacy" /></Link></li>
                </ul>
            </nav>
            </div>
            </div>
            {isCookiesOpen &&
          <Cookies closeCookies={()=> closeCookiesInfo(false)}/>
            }
        </footer>
    
    );
  };
  
export default Footer;