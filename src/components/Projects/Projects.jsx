import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { t } = useTranslation('global');

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title={t('myPractice.title')} />
          <Row>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">{t('myPractice.title')}</h3>
                  <div>
                    <p>{t('myPractice.p1')}</p>
                    <p className="mb-4">{t('myPractice.p2')}</p>
                    <p className="mb-4">{t('myPractice.p3')}</p>
                    <p className="mb-4">{t('myPractice.p4')}</p>
                  </div>
                  {t('myPractice.link1') !== 'myPractice.link1' && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href={t('myPractice.link1')}
                    >
                      {t('myPractice.link1text')}
                    </a>
                  )}

                  {t('myPractice.link2') !== 'myPractice.link2' && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={t('myPractice.link2')}
                    >
                      {t('myPractice.link2text')}
                    </a>
                  )}
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
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
                      <ProjectImg alt="IMG" filename="SistemaContinuo.jpg" />
                    </div>
                  </Tilt>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
