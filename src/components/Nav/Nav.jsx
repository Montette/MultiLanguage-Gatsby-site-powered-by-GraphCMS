import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Langs from '../Langs';
import styles from '../../styles/nav.module.scss';
import { FormattedMessage } from 'react-intl';
// import '../../styles/nav.scss'

const Nav = ({ siteTitle, hideLangs }) => (
  <nav className={styles.nav}>

    <div className={styles.nav__top}>
      <p className={styles.nav__phone}>+48 678 234098</p>
      {!hideLangs && <Langs />}
    </div>
    <div className={styles.nav__bottom}>
      <Link className={styles.nav__logo} to="/">{siteTitle}</Link>
      <ul className={styles.nav__links}>
        <li className={styles.nav__link}><Link><FormattedMessage id="nav.About us" /></Link></li>
        <li className={styles.nav__link}><Link><FormattedMessage id="nav.Services" /></Link></li>
        <li className={styles.nav__link}><Link><FormattedMessage id="nav.Portfolio" /></Link></li>
        <li className={styles.nav__link}><Link><FormattedMessage id="nav.Contact" /></Link></li>
        {/* <li className="nav__link"><Link>O nas</Link></li>
        <li className="nav__link"><Link>Usługi</Link></li>
        <li className="nav__link"><Link>Portfolio</Link></li>
        <li className="nav__link"><Link>Kontakt</Link></li> */}
      </ul>
    </div>

      {/* <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      {!hideLangs && <Langs />} */}

  </nav>
);

Nav.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Nav.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Nav;
