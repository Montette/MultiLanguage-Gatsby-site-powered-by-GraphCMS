import React from 'react';
import withLayout from '../layout';
import { graphql } from 'gatsby'

const PrivacyPolicy = ({data: { komfrez }}) => (
<main className="main">
  <div dangerouslySetInnerHTML={{__html: komfrez.cookies[0].text.html}}></div>
</main>
);

const customProps = {
localeKey: 'privacy-policy',
};

export default withLayout(customProps)(PrivacyPolicy);

export const query = graphql`
  query getPrivacyPoliticsData($locale: String){
    komfrez {
      cookies (
        where: {
          language: $locale
        }
      ) {
        text
        {
            html
        }
      }
    }
  }
`