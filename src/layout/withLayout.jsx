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
import '../styles/layout.scss'

addLocaleData([...plData, ...enData, ...deData]);

const withLayout = customProps => PageComponent => props => {
  const { locale } = props.pageContext;
  const { localeKey, hideLangs } = customProps;

  const pageContextValue = { custom: customProps, page: props.pageContext };

  const defaultLocale = languages.find(language => language.default).locale;
  const pageLocale = locale || defaultLocale;
  const pageTitle = locale ? translations[locale][`${localeKey}.title`] : '';

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <IntlProvider locale={pageLocale} messages={translations[pageLocale]}>
          <PageContext.Provider value={pageContextValue}>
            <SEO title={pageTitle} lang={pageLocale} />
            <Nav siteTitle={data.site.siteMetadata.title} hideLangs={hideLangs} />
       
              {/* <main className='main'> */}
                <PageComponent {...props} />
              {/* </main> */}
              {/* <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer> */}
     
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
