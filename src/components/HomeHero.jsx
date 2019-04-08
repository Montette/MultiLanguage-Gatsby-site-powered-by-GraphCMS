import React from 'react'
import Slider from "react-slick"
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import styles from '../styles/hero.module.scss';
// import sliderImg from '../images/manekin.jpg'
import GraphImg from 'graphcms-image'
import Button from './Button'
import { FormattedMessage } from 'react-intl'

const HomeHero = ({ data }) => {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };
      console.log(data);
    return (
        <header className={styles.hero}>
        <Slider {...settings}>
            {data.map(slide => {
                return (
                    <div className={styles.hero__slide}>
                        {/* <img src={sliderImg} alt="" /> */}
                        <GraphImg image={slide.image} withWebp={true} />
                        <div className={styles.hero__text}>
                            <p className={styles.hero__subtitle}>{slide.subtitle}</p>
                            <h1 className={styles.hero__title}>{slide.title}</h1>
                            <Button text="home.See more" />
                        </div>
                    </div>
                )
            })
          }
      </Slider>
    
        </header>
    )
};

export default HomeHero