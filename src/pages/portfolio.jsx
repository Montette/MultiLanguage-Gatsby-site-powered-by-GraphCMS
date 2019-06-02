import React from 'react';
import { graphql } from 'gatsby';
import withLayout from '../layout';
import styles from '../styles/portfolio.module.scss';
import GraphImg from 'graphcms-image';
import cx from 'classnames';
import SectionHeading from '../components/SectionHeading';


const ServicesPage = ({
  data: {
    komfrez: { galleryImages, informations },
  },
  pageContext,
}) => {
  return (
    <>
      <main className="main">
        <SectionHeading
          subtitle="portfolio.Take a look"
          title="portfolio.At examples of our works"
        />
        <section className={styles.gallery}>
          {galleryImages.map(image => {
            return (
              <GraphImg
                image={image.image}
                withWebp={true}
                className={cx(styles.gallery__img, 'wow fadeInUp')}
                outerWrapperClassName={styles.gallery__imgWrapper}
              />
            );
          })}
        </section>
        <p>* {informations[0].text}</p>
      </main>
    </>
  );
};

const customProps = {
  localeKey: 'portfolio', // same as file name in src/i18n/translations/your-lang/index.js
};

export const query = graphql`
  query getPortfolio($locale: String) {
    komfrez {
      galleryImages {
        image {
          width
          height
          handle
        }
        alt
      }
      informations(where: { language: $locale }) {
        text
      }
    }
  }
`;

export default withLayout(customProps)(ServicesPage);
