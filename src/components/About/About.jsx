import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

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
    <section id="about">
      <Container>
        <Title title={t('about.aboutMe')} />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="project-wrapper__image">
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <ProjectImg alt="IMG" filename="aboutMe.jpg" />
                  </div>
                </Tilt>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                {' '}
                {expanded ? (
                  <div>
                    <p className="about-wrapper__info-text"> {t('about.p1')} </p>
                    <p className="about-wrapper__info-text"> {t('about.p2')} </p>
                    <p className="about-wrapper__info-text"> {t('about.p3')} </p>
                    <p className="about-wrapper__info-text"> {t('about.p4')} </p>
                  </div>
                ) : (
                  <div>
                    <p className="about-wrapper__info-text">
                      {' '}
                      {t('about.p1')}{' '}
                      <span
                        onClick={toggleExpanded}
                        className="seeMoreAbout"
                        role="link"
                        onKeyDown={toggleExpanded}
                        tabIndex={0}
                      >
                        {' '}
                        See more...
                      </span>{' '}
                    </p>
                  </div>
                )}
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={t('about.btnLink')}
                  >
                    {t('about.btnText')}
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
