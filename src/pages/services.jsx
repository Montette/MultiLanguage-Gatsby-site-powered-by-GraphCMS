import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby'
import withLayout from '../layout'
import Link from '../components/Link';
import Image from '../components/Image';
import HomeHero from '../components/HomeHero'
// import styles from '../styles/services.module.scss'
import Button from '../components/Button'
import GraphImg from 'graphcms-image'
import cx from 'classnames'
import SectionHeading from '../components/SectionHeading'
import needle from '../images/needle.svg'
import diddly from '../images/nic.svg'
import Section from '../components/Section'
// import portfolioImg from '../images/services2.jpg'

const ServicesPage = ({ data: { komfrez: {services}}, pageContext }) => {
  return (
  <>
  <main className='main'>
  <SectionHeading subtitle='home.Read' title='home.What we can do for you' />
    {services.map(service => {
      return (
        // <section className={styles.service} id={service.title.toLowerCase()}>
        // <GraphImg image={service.image2} withWebp={true} className={styles.service__img} outerWrapperClassName={styles.service__imgWrapper}/>
        // <div className={styles.service__content}>
        //   <h2 className={styles.service__title}>{service.title}</h2>
        //   <p dangerouslySetInnerHTML={{__html: service.description.html}}></p>
        // </div>
        // </section>
        // <section>
          <Section data={service}/>
        // </section>
      )
    })}
  </main>
  </>
)};

const customProps = {
  localeKey: 'services', // same as file name in src/i18n/translations/your-lang/index.js
};


export const query = graphql`
  query getServicesData($locale: String){
    komfrez {
      services (
        where: {
          language: $locale
        }
      ) {
        title
        id
        image2 {
          width
          height
          handle
        }
        description {
          html
        }
      }
    }  
  }
`

export default withLayout(customProps)(ServicesPage);
