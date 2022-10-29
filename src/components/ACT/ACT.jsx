import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const ACT = () => {
  const { t } = useTranslation('global');
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="ACT">
      <Container>
        <Title title={t('ACT.title')} />
        <Row className="act-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename="profile.jpg" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text"> {t('ACT.p1')} </p>
                <p className="about-wrapper__info-text"> {t('ACT.p2')} </p>
                <p className="about-wrapper__info-text"> {t('ACT.p3')} </p>
                <p className="about-wrapper__info-text"> {t('ACT.p4')} </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ACT;
