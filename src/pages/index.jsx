import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby'
import withLayout from '../layout';
import Link from '../components/Link';
import Image from '../components/Image';
import HomeHero from '../components/HomeHero'

const IndexPage = ({ data: { komfrez } }) => {
  const heroData = komfrez.heroes;
  return (
  <>
   
<HomeHero data={heroData}/>
  </>
)};

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};


export const query = graphql`
  query getServices($locale: String){
    
    komfrez {
      heroes (
        where: {
          language: $locale
        }
      ) {
        title
        subtitle
      }
      services (
        where: {
          language: $locale
        }
      ) {
        title
        description {
          html
        }
      }
    }  
  }
`

export default withLayout(customProps)(IndexPage);
