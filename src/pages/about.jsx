import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby'
import withLayout from '../layout';
import Link from '../components/Link';
import Button from '../components/Button'
import GraphImg from 'graphcms-image'
import cx from 'classnames'
import SectionHeading from '../components/SectionHeading'
import needle from '../images/needle.svg'
import diddly from '../images/nic.svg'
import Section from '../components/Section'

const AboutPage = ({ data: { komfrez} }) => {
  const aboutSections = komfrez.aboutPages[0].aboutSections;
  console.log(aboutSections);
  return (
  <main className='main'>
  <SectionHeading subtitle='home.Read' title='home.What we can do for you' />
    {/* {services.map(service => {
      return (
        // <section className={styles.service} id={service.title.toLowerCase()}>
        // <GraphImg image={service.image2} withWebp={true} className={styles.service__img} outerWrapperClassName={styles.service__imgWrapper}/>
        // <div className={styles.service__content}>
        //   <h2 className={styles.service__title}>{service.title}</h2>
        //   <p dangerouslySetInnerHTML={{__html: service.description.html}}></p>
        // </div>
        // </section>
        <section>
          <Section data={service}/>
        </section>
      )
    })} */}
    {aboutSections.map(section => {
      return (
        <>
        {/* <SectionHeading subtitle={section.subtitle} title={section.title} cms={true}/> */}
        <Section data={section} page='about'/>
        </>
      )
    })}

  </main>
)
  };

const customProps = {
  localeKey: 'page2',
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
