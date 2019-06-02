import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import cx from 'classnames';
import languages from '../i18n/languages';
import PageContext from '../layout/PageContext';
import styles from '../styles/langs.module.scss';

const LangButton = ({ label, chosen, onClick }) => {
  return (
    <button
      className={classNames({ [styles.langButton]: true, [styles.choosenButton]: chosen })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Langs = ({ intl: { locale }, color }) => {
  const pageContext = useContext(PageContext);
  const handleSetLang = language => {
    const { originalPath } = pageContext.page;
    const newPathname = `/${language}${originalPath}`;

    localStorage.setItem('language', language);
    navigate(newPathname);
  };

  if (!pageContext.custom.localeKey) return null;
  return (
    <div className={cx(styles.langContainer, styles[color])}>
      {languages.map(language => (
        <LangButton
          key={language.locale}
          label={language.locale.toUpperCase()}
          chosen={language.locale === locale}
          onClick={() => handleSetLang(language.locale)}
        />
      ))}
    </div>
  );
};

export default injectIntl(Langs);
