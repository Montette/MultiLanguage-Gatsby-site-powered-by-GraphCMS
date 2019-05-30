import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby'
import withLayout from '../layout'
import Link from '../components/Link';
import Image from '../components/Image';
import HomeHero from '../components/HomeHero'
import styles from '../styles/portfolio.module.scss'
import Button from '../components/Button'
import GraphImg from 'graphcms-image'
import cx from 'classnames'
import SectionHeading from '../components/SectionHeading'
import needle from '../images/needle.svg'
import diddly from '../images/nic.svg'
import Section from '../components/Section'
// import portfolioImg from '../images/services2.jpg'

const ServicesPage = ({ data: { komfrez: {galleryImages, informations}}, pageContext }) => {
  console.log(galleryImages);
  console.log(informations);
  return (
  <>
  <main className='main'>
  <SectionHeading subtitle='portfolio.Take a look' title='portfolio.At examples of our works' />
  <section className={styles.gallery}>
    {galleryImages.map(image => {
      return (
        <GraphImg image={image.image} withWebp={true} className={cx(styles.gallery__img, 'wow fadeInUp')} outerWrapperClassName={styles.gallery__imgWrapper}/>
      )
    })}
    </section>
    <p>* {informations[0].text}</p>
  </main>
  </>
)};

const customProps = {
  localeKey: 'portfolio', // same as file name in src/i18n/translations/your-lang/index.js
};


export const query = graphql`
  query getPortfolio($locale: String){
    komfrez {
      galleryImages {
        image {
          width
          height
          handle
        }
        alt
      }
      informations(where: {
          language: $locale
        }){
          text
        }
    }  
  }
`

export default withLayout(customProps)(ServicesPage);
