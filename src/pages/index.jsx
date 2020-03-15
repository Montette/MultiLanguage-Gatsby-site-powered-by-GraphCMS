import React from 'react';
import { graphql } from 'gatsby';
import withLayout from '../layout';
import Link from '../components/Link';
import HomeHero from '../components/HomeHero';
import styles from '../styles/index.module.scss';
import Button from '../components/Button';
import GraphImg from 'graphcms-image';
import cx from 'classnames';
import SectionHeading from '../components/SectionHeading';
import needle from '../images/needle.svg';
import diddly from '../images/nic.svg';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import portfolioImg from '../images/maseczka-reverse.png'

const customStyles = {
  content: {
    top: 'auto',
    left: 'auto',
    right: '20px',
    bottom: '20px',
    backgroundColor: '#FCFBF3',
    paddingRight: '5px'
  },
  overlay: {
    zIndex: '1000',
    background: 'transparent'
  },
};


const IndexPage = ({
  data: {
    komfrez: { heroes, services, homeAbouts, homePortfolios },
  },
  pageContext,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldOpen, setShouldOpen] = useState(true);

  useEffect(()=> {
    if(shouldOpen && pageContext.locale === 'pl') {
        setTimeout(()=> {
      setIsModalOpen(true);
      setShouldOpen(false)
    }, 1500)
}
  })
  return (
    <>
            <Modal
                  isOpen={isModalOpen}
                  onRequestClose={() => setIsModalOpen(false)}
                  contentLabel='test'
                  style={customStyles}
                >
                  <div className={styles.modal}>
                  <div className={styles.modal__container}>

                    <div className={styles.modal__textcontainer}>
                      <h2 className={styles.modal__heading}>Maseczki ochronne</h2>
                      <Button text="home.See more" style="black" href="/maseczki-ochronne" />
                    </div>
                    <img src={portfolioImg} alt=""/>
                    </div>
                  </div>
                </Modal>
      <HomeHero data={heroes} />
      <main className="main main--home">
        <section className={styles.about}>
          <img src={needle} className={cx(styles.about__needle, 'wow fadeInUp')} alt="" />
          <h2 className={cx(styles.about__heading, 'wow fadeInUp')}>{homeAbouts[0].title}</h2>
          <div
            className={cx(styles.about__text, 'wow fadeInUp')}
            dangerouslySetInnerHTML={{ __html: homeAbouts[0].text.html }}
          />

          <Button text="home.See more" style="black" href="/o-nas" />
        </section>
        <section className={styles.services}>
          <SectionHeading subtitle="home.Read" title="home.What we can do for you" />
          <div className={styles.services__container}>
            {services.map(service => {
              return (
                <div key={service.id} className={cx(styles.services__service, styles.service)}>
                  <div className="wow fadeInUp" data-wow-delay="0.2s">
                    <Link
                      className={styles.service__link}
                      to={`/uslugi/#${service.title.toLowerCase()}`}
                    >
                      {' '}
                      <div className={cx(styles.service__overlay, styles.overlay)}>
                        <p className={styles.overlay__text}>{service.intro}</p>
                        <hr />
                      </div>
                      <GraphImg
                        image={service.image}
                        withWebp={true}
                        className={styles.service__img}
                        outerWrapperClassName={styles.service__imgWrapper}
                      />
                    </Link>
                    <h3 className={styles.service__title}>
                      <Link to={`/uslugi/#${service.title}`}>{service.title} </Link>{' '}
                    </h3>{' '}
                  </div>{' '}
                </div>
              );
            })}{' '}
          </div>{' '}
        </section>
        <section className={styles.portfolio}>
          <div className="wow fadeInUp">
            <GraphImg
              image={homePortfolios[0].image}
              withWebp={true}
              className={styles.portfolio__img}
              outerWrapperClassName={styles.portfolio__imgWrapper}
            />

            <div className={cx(styles.portfolio__textBlock)}>
              <SectionHeading subtitle="home.Take a look" title="home.What can we sew for you" />
              <Button text="home.See portfolio" style="black" href="/portfolio" />
            </div>
          </div>
        </section>
        <section className={styles.contact}>
          <img src={diddly} className={styles.contact__diddly} alt="" />
          <div className="wow fadeInUp">
            <SectionHeading
              subtitle="home.Interested in cooperation?"
              title="home.Let's create something beautiful together"
              locale={pageContext.locale}
              section="contact"
            />
          </div>
          <div className="wow fadeInUp" data-wow-delay=".5s">
            <Button text="home.Write to us" style="black" href="/kontakt" />
          </div>
        </section>
      </main>
    </>
  );
};

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};



export const query = graphql`
  query getHomeData($locale: String) {
    komfrez {
      homePortfolios {
        image {
          width
          height
          handle
        }
      }
      heroes(where: { language: $locale }) {
        title
        id
        subtitle
        image {
          width
          height
          handle
        }
      }
      services(where: { language: $locale }) {
        title
        intro
        id
        image {
          width
          height
          handle
        }
      }
      homeAbouts(where: { language: $locale }) {
        title
        text {
          html
        }
      }
    }
  }
`;

export default withLayout(customProps)(IndexPage);
