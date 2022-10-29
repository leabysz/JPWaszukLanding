import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Title from '../Title/Title';

const Contact = () => {
  const { t } = useTranslation('global');

  return (
    <section id="contact">
      <Container>
        <Title title={t('contact.title')} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text"> {t('contact.p1')} </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href={t('contact.btnLink')}
            >
              {t('contact.btnText')}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
