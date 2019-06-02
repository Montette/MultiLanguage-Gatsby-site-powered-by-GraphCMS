import React from 'react';
import { graphql } from 'gatsby';
import withLayout from '../layout';
import SectionHeading from '../components/SectionHeading';
import Section from '../components/Section';
import { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/modal.module.scss';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FCFBF3',
  },
  overlay: {
    zIndex: '1000',
  },
};

const ServicesPage = ({
  data: {
    komfrez: { services },
  },
  pageContext,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <main className="main">
        <SectionHeading subtitle="home.Read" title="home.What we can do for you" />
        {services.map(service => {
          return (
            <>
              {service.details.html && (
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={() => setIsModalOpen(false)}
                  contentLabel={service.title}
                  style={customStyles}
                >
                  <div
                    className={styles.container}
                    dangerouslySetInnerHTML={{ __html: service.details.html }}
                  />
                </Modal>
              )}
              <Section
                id={service.title.toLowerCase()}
                data={service}
                openModal={() => setIsModalOpen(true)}
              />
            </>
          );
        })}
      </main>
    </>
  );
};

const customProps = {
  localeKey: 'services', // same as file name in src/i18n/translations/your-lang/index.js
};

export const query = graphql`
  query getServicesData($locale: String) {
    komfrez {
      services(where: { language: $locale }) {
        title
        buttonText
        buttonLink
        id
        image2 {
          width
          height
          handle
        }
        description {
          html
        }
        details {
          html
        }
      }
    }
  }
`;

export default withLayout(customProps)(ServicesPage);
