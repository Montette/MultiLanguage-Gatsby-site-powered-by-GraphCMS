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
// import portfolioImg from '../images/services2.jpg'

const IndexPage = ({
  data: {
    komfrez: { heroes, services, homeAbouts, homePortfolios },
  },
  pageContext,
}) => {
  return (
    <>
      <HomeHero data={heroes} />
      <main className="main main--home">
        <section className={styles.about}>
          <img src={needle} className={cx(styles.about__needle, 'wow fadeInUp')} alt="" />
          <h2 className={cx(styles.about__heading, 'wow fadeInUp')}>{homeAbouts[0].title}</h2>
          <div
            className={cx(styles.about__text, 'wow fadeInUp')}
            dangerouslySetInnerHTML={{ __html: homeAbouts[0].text.html }}
          />

          <Button text="home.See more" style="black" href="/about" />
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
                      to={`/services/#${service.title.toLowerCase()}`}
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
                      <Link to={`/services/#${service.title}`}>{service.title} </Link>{' '}
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
            <Button text="home.Write to us" style="black" href="/contact" />
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
