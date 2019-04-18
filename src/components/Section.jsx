import React from 'react'
import Slider from "react-slick"
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import styles from '../styles/services.module.scss'
// import sliderImg from '../images/manekin.jpg'
import GraphImg from 'graphcms-image'
import Button from './Button'
import { FormattedMessage } from 'react-intl'
import SectionHeading from './SectionHeading'
import cx from 'classnames'

const Section = ({data, page}) => {
 

      console.log(data);
      const isCentered = !data.image && page === 'about';
      
    return (
     
        <section className={page === 'about' ? cx(styles.section, styles.about) : styles.section} >
            {data.image && <GraphImg image={data.image} withWebp={true} className={styles.section__img} outerWrapperClassName={styles.section__imgWrapper}/>}
            {data.image2 && <GraphImg image={data.image2} withWebp={true} className={styles.section__img} outerWrapperClassName={styles.section__imgWrapper}/>}
            <div className={isCentered  ? cx(styles.section__content, styles.center) : styles.section__content }>
      
            {/* {data.subtitle && data.title ? (
                <>
                <p>{data.subtitle}</p>
                <h2 className={styles.section__title}>{data.title}</h2>
                </>
            ) : 
            <h2 className={styles.section__title}>{data.title}</h2>
            } */}

           
            {data.title && !data.subtitle && <h2 className={styles.section__title}>{data.title}</h2>}
            {data.title && data.subtitle &&  <SectionHeading subtitle={null} title={data.subtitle} cms={true}/>}
            <div dangerouslySetInnerHTML={{__html: data.description.html}}></div>
            {data.buttonText && (
                <Button cms={true} text={data.buttonText} href={data.buttonLink}/>
            )}
            </div>
        </section>
        
      
    )
};

export default Section