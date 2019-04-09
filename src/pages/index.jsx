import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby'
import withLayout from '../layout'
import Link from '../components/Link';
import Image from '../components/Image';
import HomeHero from '../components/HomeHero'
import styles from '../styles/index.module.scss'
import Button from '../components/Button'
import GraphImg from 'graphcms-image'
import cx from 'classnames'
import SectionHeading from '../components/SectionHeading'
// import portfolioImg from '../images/services2.jpg'

const IndexPage = ({ data: { komfrez: {heroes, services, homeAbouts, homePortfolios}} }) => {
  
  return (
  <>
   
  <HomeHero data={heroes}/>
  <main className='main'>
    <section className={styles.about}>
      <h2 className={styles.about__heading}>{homeAbouts[0].title}</h2>
      <div className={styles.about__text} dangerouslySetInnerHTML={{__html: homeAbouts[0].text.html}}> 
    
      </div>
      <Button text='home.See more' style='black'/>
    </section>
    <section className={styles.services}>
    <SectionHeading subtitle='home.Read' title='home.What we can do for you'/>
    <div className={styles.services__container}>
      {services.map(service => {
        return (
         <div key={service.id} className={cx(styles.services__service, styles.service)}> 
            <Link className={styles.service__link} to={`/services/#${service.title}`}>
            <div className={cx(styles.service__overlay, styles.overlay)}>
            <p className={styles.overlay__text}>{service.intro}</p>
            <hr/>
            </div>
              <GraphImg image={service.image} withWebp={true} className={styles.service__img} outerWrapperClassName={styles.service__imgWrapper}/>
              </Link>
             <h3 className={styles.service__title}> <Link to={`/services/#${service.title}`}>{service.title}</Link></h3>
            
          </div>
          
        )
      })}
      </div>
    </section>
    <section className={styles.portfolio}>
    <GraphImg image={homePortfolios[0].image} withWebp={true} className={styles.portfolio__img} outerWrapperClassName={styles.portfolio__imgWrapper}/>
    <div className={styles.portfolio__textBlock}>
    <SectionHeading subtitle='home.Take a look' title='home.What can we sew for you'/>
    <Button text='home.See portfolio' style='black'/>
    </div>
    </section>
      <section className={styles.contact}>
      <SectionHeading subtitle='home.Interested in cooperation?' title="home.Let's create something beautiful together"/>
      <Button text='home.Write to us' style='black'/>
      </section>
  </main>
  </>
)};

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};


export const query = graphql`
  query getServices($locale: String){
    komfrez {
      homePortfolios {
        image {
          width
          height
          handle
        }
      }
      heroes (
        where: {
          language: $locale
        }
      ) {
        title
        id
        subtitle
        image {
          width
          height
          handle
        }
      }
      services (
        where: {
          language: $locale
        }
      ) {
        title
        intro
        id
        image {
          width
          height
          handle
        }
        description {
          html
        }
      }
      homeAbouts (
        where: {
          language: $locale
        }
      ) {
        title
        text {
          html
        }
      }
    }  
  }
`

export default withLayout(customProps)(IndexPage);
