import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const ACT = () => {
  const [expandedACT, setExpandedACT] = useState(false);

  const toggleExpandedACT = () => {
    setExpandedACT(!expandedACT);
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
    <section id="ACT">
      <Container>
        <Title title={t('ACT.title')} />
        <Row className="act-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
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
                <div className="about-wrapper__image">
                  <ProjectImg alt="profile picture" filename="ACT.jpg" />
                </div>
              </Tilt>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="act-wrapper__info" style={{ textAlign: 'left' }}>
                {expandedACT ? (
                  <div>
                    <p className="act-wrapper__info-text"> {t('ACT.p1')} </p>
                    <p className="act-wrapper__info-text"> {t('ACT.p2')} </p>
                    <p className="act-wrapper__info-text"> {t('ACT.p3')} </p>
                    <p className="act-wrapper__info-text"> {t('ACT.p4')} </p>
                  </div>
                ) : (
                  <div>
                    <p className="act-wrapper__info-text">
                      {t('ACT.p1')}{' '}
                      <span
                        onClick={toggleExpandedACT}
                        className="seeMoreACT"
                        role="link"
                        onKeyDown={toggleExpandedACT}
                        tabIndex={0}
                      >
                        {t('header.more')}
                      </span>{' '}
                    </p>
                  </div>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ACT;
