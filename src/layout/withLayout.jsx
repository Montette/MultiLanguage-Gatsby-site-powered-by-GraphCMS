import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { IntlProvider, addLocaleData } from 'react-intl';

import PageContext from './PageContext';

import plData from 'react-intl/locale-data/pl';
import enData from 'react-intl/locale-data/en';
import deData from 'react-intl/locale-data/de';
import { translations, languages } from '../i18n';

import Nav from '../components/Nav/Nav';
import SEO from '../components/SEO';
import '../styles/layout.scss';
import Footer from '../components/Footer';
import { useEffect } from 'react';

addLocaleData([...plData, ...enData, ...deData]);

const withLayout = customProps => PageComponent => props => {
  const { locale } = props.pageContext;
  const { localeKey, hideLangs } = customProps;

  const pageContextValue = { custom: customProps, page: props.pageContext };
  const defaultLocale = languages.find(language => language.default).locale;
  const pageLocale = locale || defaultLocale;
  const pageTitle = locale ? translations[locale][`${localeKey}.title`] : '';

  useEffect(() => {
    let WOW = require('../../node_modules/wow.js/dist/wow');
    const wow = new WOW();
    wow.init();
  });
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery($locale: String) {
          site {
            siteMetadata {
              title
            }
          }
          komfrez {
            contacts(where: { language: $locale }) {
              street
              city
              mail
              tel
              country
              language
            }
          }
        }
      `}
      render={data => (
        <IntlProvider locale={pageLocale} messages={translations[pageLocale]}>
          <PageContext.Provider value={pageContextValue}>
            <SEO title={pageTitle} lang={pageLocale} />
            <Nav
              phone={data.komfrez.contacts[0].tel}
              siteTitle={data.site.siteMetadata.title}
              hideLangs={hideLangs}
              style={localeKey === 'home' ? 'white' : 'black'}
            />

            <PageComponent {...props} />
            <Footer data={data.komfrez.contacts} lang={pageLocale} />
          </PageContext.Provider>
        </IntlProvider>
      )}
    />
  );
};

withLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withLayout;
