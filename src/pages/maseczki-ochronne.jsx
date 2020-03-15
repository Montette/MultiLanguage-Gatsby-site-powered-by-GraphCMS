import React from 'react';
import { graphql } from 'gatsby';
import withLayout from '../layout';
import styles from '../styles/portfolio.module.scss';
import GraphImg from 'graphcms-image';
import cx from 'classnames';
import SectionHeading from '../components/SectionHeading';


const ServicesPage = ({
  data: {
    komfrez: { maskImages, maskInformations},
  },
  pageContext,
}) => {
  return (
    <>
      <main  className={cx(styles.maskmain, 'main')}>
        <SectionHeading
          subtitle=""
          title="Maski ochronne wielorazowe - Bawełna 100%"
          cms={true}
        />
         <div className={styles.mask__desc} dangerouslySetInnerHTML={{ __html: maskInformations[0].description.html }} />
        <section className={styles.gallery}>
          {maskImages.reverse().map(image => {
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
        <section className={styles.mask__infowrapper}>
        <div className={styles.mask__table} dangerouslySetInnerHTML={{ __html: maskInformations[0].table.html }} />
        <div className={styles.mask__spec} dangerouslySetInnerHTML={{ __html: maskInformations[0].specification.html }} />

        <div className={styles.mask__sale} dangerouslySetInnerHTML={{ __html: maskInformations[0].saleDetails.html }} />
        <div className={styles.mask__contact} dangerouslySetInnerHTML={{ __html: maskInformations[0].contact.html }} />
        <div className={styles.mask__info} dangerouslySetInnerHTML={{ __html: maskInformations[0].info.html }} />
        </section>
      </main>
    </>
  );
};

const customProps = {
  localeKey: 'maskPortfolio', // same as file name in src/i18n/translations/your-lang/index.js
};

export const query = graphql`
  query getMaskPortfolio($locale: String) {
    komfrez {
        maskImages {
        image {
          width
          height
          handle
        }
        alt
      }
      maskInformations(where: { language: $locale }) {
        info {
            html
        }
        description {
            html
        }
        specification {
            html
        }
        saleDetails {
            html
        }
        table {
            html
        }
        contact {
            html
        }
      }
    }
  }
`;

export default withLayout(customProps)(ServicesPage);
