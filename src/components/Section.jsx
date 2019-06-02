import React from 'react';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import styles from '../styles/services.module.scss';
import GraphImg from 'graphcms-image';
import Button from './Button';
import SectionHeading from './SectionHeading';
import cx from 'classnames';

const Section = ({ data, page, openModal, id }) => {
  const isCentered = !data.image && page === 'about';

  return (
    <section
      id={id}
      className={
        page === 'about'
          ? cx(styles.section, styles.about, 'wow fadeInUp')
          : cx(styles.section, 'wow fadeInUp')
      }
    >
      {data.image && (
        <GraphImg
          image={data.image}
          withWebp={true}
          className={styles.section__img}
          outerWrapperClassName={styles.section__imgWrapper}
        />
      )}
      {data.image2 && (
        <GraphImg
          image={data.image2}
          withWebp={true}
          className={styles.section__img}
          outerWrapperClassName={styles.section__imgWrapper}
        />
      )}
      <div
        className={
          isCentered ? cx(styles.section__content, styles.center) : styles.section__content
        }
      >
        {data.title && !data.subtitle && <h2 className={styles.section__title}>{data.title}</h2>}
        {data.title && data.subtitle && (
          <SectionHeading subtitle={null} title={data.subtitle} cms={true} />
        )}
        <div dangerouslySetInnerHTML={{ __html: data.description.html }} />
        {data.buttonText && (
          <Button
            type={data.buttonLink ? 'link' : 'button'}
            cms={true}
            text={data.buttonText}
            href={data.buttonLink}
            handleClick={openModal}
          />
        )}
      </div>
    </section>
  );
};

export default Section;
