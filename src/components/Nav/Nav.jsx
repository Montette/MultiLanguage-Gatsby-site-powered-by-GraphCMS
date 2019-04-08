import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Langs from '../Langs';
import styles from '../../styles/nav.module.scss';
import { FormattedMessage } from 'react-intl';
import {Location} from '@reach/router'
import {useState, useEffect} from 'react';
import cx from 'classnames';
// import '../../styles/nav.scss'

const Nav = ({ siteTitle, hideLangs }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClasses = !isMenuOpen ? styles.nav__links : cx(styles.nav__links, styles.open);
  const burgerClasses = !isMenuOpen ? styles.nav__burger : cx(styles.nav__burger, styles.active);
  return (


  <nav className={styles.nav}>

    <div className={styles.nav__top}>
      <p className={styles.nav__phone}>+48 678 234098</p>
      {!hideLangs && <Langs />}
    </div>
    <div className={styles.nav__bottom}>
      <Link className={styles.nav__logo} to="/">{siteTitle}</Link>
      <button 
        aria-label="open menu"
        className={burgerClasses} 
        onClick={()=> setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span ></span>
            <span></span>
            <span></span>
      </button>
      <ul className={menuClasses}>
        <li className={styles.nav__link}><Link activeClassName={styles.active} to="/about"><FormattedMessage id="nav.About us" /></Link></li>
        <li className={styles.nav__link}><Link activeClassName={styles.active} to="/services"><FormattedMessage id="nav.Services" /></Link></li>
        <li className={styles.nav__link}><Link activeClassName={styles.active} to="/portfolio"><FormattedMessage id="nav.Portfolio" /></Link></li>
        <li className={styles.nav__link}><Link activeClassName={styles.active} to="/contact"><FormattedMessage id="nav.Contact" /></Link></li>
      </ul>
    </div>
  </nav>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Nav.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Nav;
