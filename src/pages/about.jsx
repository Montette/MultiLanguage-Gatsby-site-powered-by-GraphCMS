import React from 'react';
import { graphql } from 'gatsby'
import withLayout from '../layout';
import SectionHeading from '../components/SectionHeading'
import Section from '../components/Section'

const AboutPage = ({ data: { komfrez} }) => {
  const aboutSections = komfrez.aboutPages[0].aboutSections;
  console.log(aboutSections);
  return (
  <main className='main'>
  <SectionHeading subtitle='about.A few words' title='about.About our company' />
    {aboutSections.map(section => {
      return (
        <Section data={section} page='about'/>
      )
    })}
  </main>
)
  };

const customProps = {
  localeKey: 'about',
};

export const query = graphql`
  query getAboutData($locale: String){
    komfrez {
      aboutPages (
        where: {
          language: $locale
        }
      ) {
        aboutSections(orderBy: order_ASC) {
        title
        subtitle
        description {
          html
        }
        image {
          handle
          width
          height
        }
        id
        buttonText
        buttonLink
      }
    }
      
    }  
  }
`

export default withLayout(customProps)(AboutPage);
