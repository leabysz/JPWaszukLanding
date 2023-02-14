import React from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col, Container } from 'react-bootstrap';
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
            <form name="suscribeForm" method="POST" data-netlify="true">
              <Row>
                <Col md={6} sm={12}>
                  <input type="hidden" name="form-name" value="suscribeForm" />
                  <div>
                    <label htmlFor="name" className="labelStyle">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="formStyle"
                        placeholder={t('contact.inputName')}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="email" className="labelStyle">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="formStyle"
                        placeholder={t('contact.inputEmail')}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="tel" className="labelStyle">
                      <input
                        id="tel"
                        type="tel"
                        name="tel"
                        className="formStyle"
                        placeholder={t('contact.inputTel')}
                      />
                    </label>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div style={{ height: '100%' }}>
                    <label
                      htmlFor="message"
                      className="labelStyle"
                      style={{ height: '100%', paddingBottom: '2rem' }}
                    >
                      <textarea
                        id="message"
                        type="message"
                        name="message"
                        className="formStyle"
                        placeholder={t('contact.message')}
                        style={{ height: '100%', width: 'inherit' }}
                      />
                    </label>
                  </div>
                </Col>
              </Row>

              <button type="submit" className="cta-btn cta-btn--resume">
                {t('contact.btnText')}
              </button>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
